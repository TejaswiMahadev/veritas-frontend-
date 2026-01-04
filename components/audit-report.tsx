"use client"

import { FileText, AlertTriangle, Info, CheckCircle2, Download, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AuditReportProps {
  data: {
    summary: string
    findings: Array<{ severity: string; text: string }>
    recommendations: string[]
    confidence: number
    committeeResolution?: {
      final_risk_level: string
      decision_basis: string
      confidence: number
    }
    vendorTrustProfile?: {
      trust_score: number
      trust_level: string
      trend: string
    }
    narrative?: string
  }
  onExport?: () => void
}

function SeverityIcon({ severity }: { severity: string }) {
  switch (severity) {
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-[oklch(0.7_0.18_85)]" />
    case "error":
      return <AlertTriangle className="h-4 w-4 text-destructive" />
    default:
      return <Info className="h-4 w-4 text-primary" />
  }
}

export default function AuditReport({ data, onExport }: AuditReportProps) {
  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/20">
      {/* Header styled like a premium digital certificate */}
      <div className="relative overflow-hidden border border-primary/20 rounded-2xl p-6 bg-gradient-to-br from-primary/10 via-background to-background shadow-sm">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Shield className="h-24 w-24 text-primary" />
        </div>
        <div className="relative flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Official Verification Report</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mt-1">Audit Summary</h2>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Confidence Level</span>
              <span className="text-lg font-bold text-primary">{data.confidence}%</span>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Analysis Type</span>
              <span className="text-lg font-bold text-foreground">6-Agent Committee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Signals: Trust & Arbitration - Side by Side Cards */}
      <div className="grid grid-cols-2 gap-4">
        {data.vendorTrustProfile && (
          <div className="group p-4 bg-muted/30 border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Vendor Trust</span>
              <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${data.vendorTrustProfile.trust_level === 'TRUSTED' ? 'bg-[oklch(0.55_0.18_145)]/20 text-[oklch(0.55_0.18_145)]' : 'bg-[oklch(0.7_0.18_85)]/20 text-[oklch(0.7_0.18_85)]'}`}>
                {data.vendorTrustProfile.trust_level}
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold tracking-tight text-foreground">{data.vendorTrustProfile.trust_score.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">/ 100</span>
            </div>
            <div className="mt-3 h-1 w-full bg-border/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-1000"
                style={{ width: `${data.vendorTrustProfile.trust_score}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 font-medium flex items-center gap-1">
              <span className={data.vendorTrustProfile.trend === 'Rising' ? 'text-[oklch(0.55_0.18_145)]' : 'text-primary'}>
                {data.vendorTrustProfile.trend}
              </span>
              Performance Trend
            </p>
          </div>
        )}

        {data.committeeResolution && (
          <div className="group p-4 bg-primary/5 border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Committee Verdict</span>
              <RotateCcw className="h-3 w-3 text-primary/40 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <p className="text-xl font-bold text-foreground leading-tight">{data.committeeResolution.final_risk_level}</p>
            <div className="mt-3 p-2 bg-background/50 rounded-lg border border-primary/10">
              <p className="text-[10px] text-muted-foreground leading-snug line-clamp-3 italic">
                "{data.committeeResolution.decision_basis}"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Official Narrative Card */}
      {data.narrative && (
        <div className="relative p-6 bg-background border border-border/50 rounded-2xl shadow-sm">
          <div className="absolute top-0 right-0 p-4">
            <FileText className="h-4 w-4 text-muted-foreground/20" />
          </div>
          <h4 className="text-[10px] font-bold text-foreground mb-4 uppercase tracking-[0.2em]">Audit Narrative</h4>
          <div className="prose prose-sm max-w-none">
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line font-serif italic border-l-2 border-primary/20 pl-4 py-1">
              {data.narrative}
            </p>
          </div>
        </div>
      )}

      {/* Findings fallback/supplement */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold text-foreground mb-2 uppercase tracking-[0.2em]">Material Findings</h4>
        <div className="space-y-3">
          {data.findings.length > 0 ? data.findings.map((finding, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 border border-border/30 rounded-xl hover:bg-muted/40 transition-colors">
              <div className="mt-0.5">
                <SeverityIcon severity={finding.severity} />
              </div>
              <p className="text-sm text-foreground/90 font-medium leading-normal">{finding.text}</p>
            </div>
          )) : (
            <div className="flex flex-col items-center justify-center py-6 bg-muted/10 border border-dashed border-border rounded-xl">
              <CheckCircle2 className="h-8 w-8 text-[oklch(0.55_0.18_145)]/40 mb-2" />
              <p className="text-sm text-muted-foreground italic">No material findings reported.</p>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
        <h4 className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em]">Mitigation Steps</h4>
        <ul className="grid grid-cols-1 gap-3">
          {data.recommendations.map((rec, index) => (
            <li key={index} className="group flex items-start gap-3 text-sm">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <span className="text-[10px] font-bold">{index + 1}</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-snug">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Professional Export Section */}
      <div className="pt-6 mt-6 border-t border-border flex flex-col gap-3">
        <Button
          onClick={onExport}
          className="w-full h-12 gap-2 font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          Export Procurement Audit Dossier
        </Button>
        <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest font-medium">
          Digitally Signed by Veritas AI Security Engine
        </p>
      </div>
    </div>
  )
}
