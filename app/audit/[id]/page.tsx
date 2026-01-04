"use client"

import { useState, useEffect, useCallback } from "react"
import { useParams } from "next/navigation"
import { Shield, Download, AlertCircle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AgentPipeline from "@/components/agent-pipeline"
import ExtractedFields from "@/components/extracted-fields"
import NormalizedData from "@/components/normalized-data"
import ValidationResults from "@/components/validation-results"
import AuditReport from "@/components/audit-report"
import DocumentViewer from "@/components/document-viewer"
import { apiClient, type ExtractedData, type FraudAnalysis, type AuditReportData } from "@/lib/api-client"
import { downloadFile } from "@/lib/utils"

type PipelineStep = "idle" | "processing" | "complete" | "warning" | "error"

interface PipelineState {
  extraction: PipelineStep
  normalization: PipelineStep
  validation: PipelineStep
  arbitration: PipelineStep
  trust: PipelineStep
  audit: PipelineStep
}

interface DocumentAnomaly {
  id: string
  title: string
  description: string
  severity: "critical" | "high" | "medium" | "low"
  field?: string
}

function transformExtractedData(data: ExtractedData) {
  return {
    vendor: {
      name: data.vendor?.name || "N/A",
      gstin: data.vendor?.gstin || "N/A",
      pan: data.vendor?.pan || "N/A",
      address: data.vendor?.address || "N/A",
    },
    buyer: {
      name: data.buyer?.name || "N/A",
      gstin: data.buyer?.gstin || "N/A",
      address: data.buyer?.address || "N/A",
    },
    invoice: {
      number: data.invoice_number || "N/A",
      date: data.invoice_date || "N/A",
      dueDate: "N/A",
      poNumber: "N/A",
    },
    amounts: {
      subtotal: data.amounts?.taxable_amount || 0,
      cgst: (data.amounts?.tax_amount || 0) / 2,
      sgst: (data.amounts?.tax_amount || 0) / 2,
      total: data.amounts?.total_amount || 0,
      currency: data.amounts?.currency || "INR",
    },
    lineItems: (data.line_items || []).map((item) => ({
      description: item.description || "",
      qty: item.quantity || 0,
      rate: item.unit_price || 0,
      amount: item.amount || 0,
    })),
  }
}

function transformNormalizedData(extractedData: ExtractedData) {
  const gstinValid = extractedData.vendor?.gstin
    ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(extractedData.vendor.gstin)
    : false

  return {
    vendor: {
      name: {
        before: extractedData.vendor?.name || "N/A",
        after: extractedData.vendor?.name || "N/A",
      },
      gstin: {
        before: extractedData.vendor?.gstin || "N/A",
        after: extractedData.vendor?.gstin || "N/A",
        valid: gstinValid,
      },
    },
    dates: {
      invoiceDate: {
        before: extractedData.invoice_date || "N/A",
        after: extractedData.invoice_date || "N/A",
      },
    },
    amounts: {
      currency: {
        before: extractedData.amounts?.currency || "INR",
        after: extractedData.amounts?.currency || "INR",
      },
      total: {
        before: String(extractedData.amounts?.total_amount || "0"),
        after: `${extractedData.amounts?.currency || "INR"} ${(extractedData.amounts?.total_amount || 0).toLocaleString()}`,
      },
    },
  }
}

function transformValidationResults(data: FraudAnalysis) {
  const validationScore = Math.max(0, Math.round(100 - data.fraud_score))

  const checks = data.triggered_flags.map((flag) => ({
    name: flag.id.replace(/_/g, " ").replace(/INV /i, ""),
    status:
      flag.severity === "critical"
        ? ("error" as const)
        : flag.severity === "high"
          ? ("error" as const)
          : flag.severity === "medium"
            ? ("warning" as const)
            : ("pass" as const),
    details: flag.description,
    aiAudit: flag.ai_audit_check,
  }))

  if (data.summary.total_flags < 5) {
    checks.push({
      name: "Document Format",
      status: "pass" as const,
      details: "Document structure is valid and parseable",
      aiAudit: undefined,
    })
  }

  return {
    score: validationScore,
    checks,
    anomalies: data.recommendations.map((rec) => ({
      type: "recommendation",
      message: rec,
    })),
  }
}

function transformAuditReport(data: AuditReportData) {
  const summaryLines = data.executive_summary
    .split("\n")
    .filter((line) => !line.includes("═") && !line.includes("║") && line.trim().length > 0)
  const summaryText =
    summaryLines.slice(0, 5).join(" ").trim() ||
    `Risk Assessment: ${data.risk_level} with score ${data.fraud_score}/100. ${data.flag_summary.total_flags} issues identified.`

  return {
    summary: summaryText,
    findings: data.issues_identified.map((issue) => ({
      severity:
        issue.severity.toLowerCase() === "critical"
          ? "error"
          : issue.severity.toLowerCase() === "medium"
            ? "warning"
            : "info",
      text: `${issue.title}: ${issue.description}`,
    })),
    recommendations: data.recommendations.map((rec) => rec.action),
    confidence: Math.round(100 - (data.fraud_score || 0)),
    committeeResolution: data.committee_resolution,
    vendorTrustProfile: data.vendor_trust_profile,
    narrative: data.audit_narrative,
  }
}

function extractAnomalies(fraudAnalysis: FraudAnalysis): DocumentAnomaly[] {
  return fraudAnalysis.triggered_flags.map((flag) => ({
    id: flag.id,
    title: flag.id.replace(/_/g, " ").replace(/INV /i, ""),
    description: flag.description,
    severity: flag.severity.toLowerCase() as "critical" | "high" | "medium" | "low",
    field: Object.keys(flag.evidence || {})[0] || undefined,
  }))
}

export default function AuditPage() {
  const params = useParams()
  const fileId = params.id as string

  const [pipeline, setPipeline] = useState<PipelineState>({
    extraction: "idle",
    normalization: "idle",
    validation: "idle",
    arbitration: "idle",
    trust: "idle",
    audit: "idle",
  })
  const [isComplete, setIsComplete] = useState(false)
  const [activeTab, setActiveTab] = useState("extracted")
  const [extractedData, setExtractedData] = useState<ReturnType<typeof transformExtractedData> | null>(null)
  const [normalizedData, setNormalizedData] = useState<ReturnType<typeof transformNormalizedData> | null>(null)
  const [validationResults, setValidationResults] = useState<ReturnType<typeof transformValidationResults> | null>(null)
  const [auditReport, setAuditReport] = useState<ReturnType<typeof transformAuditReport> | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("Document")
  const [fileType, setFileType] = useState<string>("application/pdf")
  const [fileDataUrl, setFileDataUrl] = useState<string | undefined>(undefined)
  const [anomalies, setAnomalies] = useState<DocumentAnomaly[]>([])

  const runPipeline = useCallback(async () => {
    setError(null)
    setIsComplete(false)
    setAnomalies([])
    setPipeline({
      extraction: "idle",
      normalization: "idle",
      validation: "idle",
      arbitration: "idle",
      trust: "idle",
      audit: "idle",
    })

    try {
      // Step 1: Extract
      setPipeline((p) => ({ ...p, extraction: "processing" }))
      const extracted = await apiClient.extractInvoice(fileId)
      setExtractedData(transformExtractedData(extracted))
      await new Promise(r => setTimeout(r, 800)) // Visual beat
      setPipeline((p) => ({ ...p, extraction: "complete" }))

      // Step 2: Normalize
      setPipeline((p) => ({ ...p, normalization: "processing" }))
      const normalized = await apiClient.normalizeInvoice(extracted)
      setNormalizedData(transformNormalizedData(normalized))
      await new Promise(r => setTimeout(r, 600)) // Visual beat
      setPipeline((p) => ({ ...p, normalization: "complete" }))

      // Step 3: Fraud Analysis
      setPipeline((p) => ({ ...p, validation: "processing" }))
      const fraudAnalysis = await apiClient.analyzeFraud(normalized)
      setValidationResults(transformValidationResults(fraudAnalysis))
      setAnomalies(extractAnomalies(fraudAnalysis))
      const validationStatus = fraudAnalysis.fraud_score > 30 ? "warning" : "complete"
      await new Promise(r => setTimeout(r, 1000)) // Analysis take time
      setPipeline((p) => ({ ...p, validation: validationStatus as PipelineStep }))

      // Step 4: Arbitration (New)
      setPipeline((p) => ({ ...p, arbitration: "processing" }))
      await new Promise(r => setTimeout(r, 1200)) // Arbitration simulation
      const arbStatus = fraudAnalysis.committee_decision?.final_risk_level === 'CRITICAL' ? 'error' : 'complete'
      setPipeline((p) => ({ ...p, arbitration: arbStatus as PipelineStep }))

      // Step 5: Trust Scoring (New)
      setPipeline((p) => ({ ...p, trust: "processing" }))
      await new Promise(r => setTimeout(r, 800))
      setPipeline((p) => ({ ...p, trust: "complete" }))

      // Step 6: Audit Report
      setPipeline((p) => ({ ...p, audit: "processing" }))
      const report = await apiClient.generateReport(fraudAnalysis)
      setAuditReport(transformAuditReport(report))
      setPipeline((p) => ({ ...p, audit: "complete" }))

      setIsComplete(true)
    } catch (err) {
      console.error("Pipeline failed:", err)
      setError(err instanceof Error ? err.message : "Pipeline processing failed")

      setPipeline((p) => {
        if (p.extraction === "processing") return { ...p, extraction: "error" }
        if (p.normalization === "processing") return { ...p, normalization: "error" }
        if (p.validation === "processing") return { ...p, validation: "error" }
        if (p.arbitration === "processing") return { ...p, arbitration: "error" }
        if (p.trust === "processing") return { ...p, trust: "error" }
        if (p.audit === "processing") return { ...p, audit: "error" }
        return p
      })
    }
  }, [fileId])

  useEffect(() => {
    const storedData = sessionStorage.getItem(`invoice_${fileId}`)
    if (storedData) {
      const parsed = JSON.parse(storedData)
      setFileName(parsed.name || "Document")
      setFileType(parsed.type || "application/pdf")
      setFileDataUrl(parsed.dataUrl || undefined)
    }

    runPipeline()
  }, [fileId, runPipeline])

  const handleAnomalyClick = (anomaly: DocumentAnomaly) => {
    setActiveTab("validation")
  }

  const handleDownloadReport = () => {
    if (!auditReport) return

    const reportText = `
AUDIT NARRATIVE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated: ${new Date().toLocaleString()}

ASSESSMENT SUMMARY:
${auditReport.summary}

DOCUMENT REVIEWED:
Invoice Number: ${extractedData?.invoice?.number || "N/A"}
Date: ${extractedData?.invoice?.date || "N/A"}
Vendor: ${extractedData?.vendor?.name || "Unknown"}
Buyer: ${extractedData?.buyer?.name || "Unknown"}
Total Amount: ${extractedData?.amounts?.currency} ${extractedData?.amounts?.total?.toLocaleString()}

RISK ANALYSIS:
Confidence Level: ${auditReport.confidence}%
Final Risk Level: ${auditReport.committeeResolution?.final_risk_level || "N/A"}

NARRATIVE ASSESSMENT:
${auditReport.narrative || "No narrative generated."}

MATERIAL FINDINGS:
${auditReport.findings.map((f, i) => `${i + 1}. [${f.severity.toUpperCase()}] ${f.text}`).join("\n")}

RECOMMENDED MITIGATION STEPS:
${auditReport.recommendations.map((r, i) => `${i + 1}. ${r}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Digitally Signed by Veritas AI Security Engine
    `.trim()

    downloadFile(reportText, `audit_report_${fileId}.txt`, "text/plain")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Veritas</span>
          </div>
          <div className="flex items-center gap-2">
            {error && (
              <Button variant="outline" onClick={runPipeline} className="gap-2 bg-transparent">
                <RotateCcw className="h-4 w-4" />
                Retry
              </Button>
            )}
            {isComplete && (
              <Button onClick={handleDownloadReport} className="gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Pipeline Visualization */}
      <div className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <AgentPipeline state={pipeline} />
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-destructive">Processing Error</p>
              <p className="text-sm text-destructive/80 mt-1">{error}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Make sure the API server is running at {process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Split Screen */}
      {isComplete && extractedData && normalizedData && validationResults && auditReport && (
        <main className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-200px)]">
            {/* Left Pane - Document Viewer with Anomalies */}
            <div className="border-r border-border p-6">
              <DocumentViewer
                fileName={fileName}
                fileType={fileType}
                dataUrl={fileDataUrl}
                anomalies={anomalies}
                onAnomalyClick={handleAnomalyClick}
              />
            </div>

            {/* Right Pane - Results Tabs */}
            <div className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="extracted" className="text-xs">
                    Extracted
                  </TabsTrigger>
                  <TabsTrigger value="normalized" className="text-xs">
                    Normalized
                  </TabsTrigger>
                  <TabsTrigger value="validation" className="text-xs">
                    Validation
                  </TabsTrigger>
                  <TabsTrigger value="audit" className="text-xs">
                    Audit
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="extracted" className="mt-4">
                  <ExtractedFields data={extractedData} />
                </TabsContent>

                <TabsContent value="normalized" className="mt-4">
                  <NormalizedData data={normalizedData} />
                </TabsContent>

                <TabsContent value="validation" className="mt-4">
                  <ValidationResults data={validationResults} />
                </TabsContent>

                <TabsContent value="audit" className="mt-4">
                  <AuditReport data={auditReport} onExport={handleDownloadReport} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
