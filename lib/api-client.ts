const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://veritas-api-service.onrender.com"

export interface ExtractedData {
  document_id?: string
  document_type?: string
  invoice_number?: string
  invoice_date?: string
  vendor?: {
    name?: string | null
    address?: string | null
    gstin?: string | null
    pan?: string | null
  }
  buyer?: {
    name?: string | null
    address?: string | null
    gstin?: string | null
  }
  amounts?: {
    total_amount?: number
    tax_amount?: number
    taxable_amount?: number
    currency?: string
  }
  line_items?: Array<{
    description?: string
    quantity?: number
    unit_price?: number
    amount?: number
  }>
  authentication?: {
    has_digital_signature?: boolean
    has_seal?: boolean
  }
  raw_text?: string
  extraction_method?: string
}

export interface FraudAnalysis {
  document_type: string
  fraud_score: number
  risk_level: string
  summary: {
    total_flags: number
    critical_flags: number
    high_flags: number
    ai_flags: number
    flags_by_category: Record<string, string[]>
  }
  triggered_flags: Array<{
    id: string
    description: string
    severity: string
    evidence: Record<string, unknown>
    ai_audit_check?: {
      why_is_wrong: string
      auditor_question: string
      financial_risk: string
    }
  }>
  ai_signals: unknown
  semantic_analysis: unknown
  committee_decision?: any
  trust_analysis?: any
  details: {
    total_weight: number
    max_possible: number
    flag_count: number
    weight_breakdown: Record<string, { count: number; weight: number }>
    normalization_factor: number
  }
  recommendations: string[]
}

export interface AuditReportData {
  document_type: string
  generated_at: string
  fraud_score: number
  risk_level: string
  flag_summary: {
    total_flags: number
    critical_flags: number
    high_flags: number
    ai_flags: number
    flags_by_category: Record<string, string[]>
  }
  executive_summary: string
  invoice_details: Record<string, string | number>
  validation_summary: string
  issues_identified: Array<{
    flag_id: string
    severity: string
    icon: string
    title: string
    description: string
    implication: string
    recommended_action: string
    evidence: Record<string, unknown>
  }>
  recommendations: Array<{
    priority: number
    icon: string
    category: string
    action: string
    reason: string
    escalate_to: string | null
  }>
  semantic_insights: unknown
  committee_resolution?: any
  vendor_trust_profile?: any
  audit_narrative: string
  metadata: {
    agent_version: string
    analysis_timestamp: string
    total_flags: number
    max_score: number
    gemini_enabled: boolean
  }
}

export interface UploadResponse {
  file_id: string
  filename: string
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl
    console.log("[v0] API Client initialized with base URL:", this.baseUrl)
  }

  async uploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData()
    formData.append("file", file)

    console.log("[v0] Uploading file to:", `${this.baseUrl}/api/upload`)
    console.log("[v0] File details:", { name: file.name, size: file.size, type: file.type })

    try {
      const response = await fetch(`${this.baseUrl}/api/upload`, {
        method: "POST",
        body: formData,
      })

      console.log("[v0] Upload response status:", response.status)

      if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: "Upload failed" }))
        throw new Error(error.detail || "Upload failed")
      }

      const data = await response.json()
      console.log("[v0] Upload response data:", data)
      return data
    } catch (err) {
      console.error("[v0] Upload fetch error:", err)
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        throw new Error(
          `Cannot connect to API server at ${this.baseUrl}. Please ensure the server is running and CORS is enabled.`,
        )
      }
      throw err
    }
  }

  async extractInvoice(fileId: string): Promise<ExtractedData> {
    const response = await fetch(`${this.baseUrl}/api/agent1/extract`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file_id: fileId }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: "Extraction failed" }))
      throw new Error(error.detail || "Extraction failed")
    }

    const data = await response.json()
    // API returns { document: {...} }, unwrap it
    return data.document || data
  }

  async normalizeInvoice(document: ExtractedData): Promise<ExtractedData> {
    const response = await fetch(`${this.baseUrl}/api/agent2/normalize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ document }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: "Normalization failed" }))
      throw new Error(error.detail || "Normalization failed")
    }

    const data = await response.json()
    // API returns { document: {...} }, unwrap it
    return data.document || data
  }

  async analyzeFraud(document: ExtractedData): Promise<FraudAnalysis> {
    const response = await fetch(`${this.baseUrl}/api/agent3/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ document }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: "Fraud analysis failed" }))
      throw new Error(error.detail || "Fraud analysis failed")
    }

    return response.json()
  }

  async generateReport(fraudAnalysis: FraudAnalysis): Promise<AuditReportData> {
    const response = await fetch(`${this.baseUrl}/api/agent4/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fraud_analysis: fraudAnalysis }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: "Report generation failed" }))
      throw new Error(error.detail || "Report generation failed")
    }

    return response.json()
  }
}

export const apiClient = new ApiClient()
export default apiClient
