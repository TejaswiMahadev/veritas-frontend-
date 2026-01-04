"use client"

import { CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react"

interface ValidationResultsProps {
  data: {
    score: number
    checks: Array<{ name: string; status: "pass" | "warning" | "error"; details: string }>
    anomalies: Array<{ type: string; message: string }>
  }
}

function StatusIcon({ status }: { status: "pass" | "warning" | "error" }) {
  switch (status) {
    case "pass":
      return <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.18_145)]" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-[oklch(0.7_0.18_85)]" />
    case "error":
      return <XCircle className="h-4 w-4 text-destructive" />
  }
}

function getStatusBg(status: "pass" | "warning" | "error") {
  switch (status) {
    case "pass":
      return "bg-[oklch(0.55_0.18_145)]/10"
    case "warning":
      return "bg-[oklch(0.7_0.18_85)]/10"
    case "error":
      return "bg-destructive/10"
  }
}

export default function ValidationResults({ data }: ValidationResultsProps) {
  const scoreColor =
    data.score >= 80
      ? "text-[oklch(0.55_0.18_145)]"
      : data.score >= 60
        ? "text-[oklch(0.7_0.18_85)]"
        : "text-destructive"

  const scoreBg =
    data.score >= 80
      ? "stroke-[oklch(0.55_0.18_145)]"
      : data.score >= 60
        ? "stroke-[oklch(0.7_0.18_85)]"
        : "stroke-destructive"

  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2">
      {/* Score Gauge */}
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(data.score / 100) * 352} 352`}
              className={scoreBg}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${scoreColor}`}>{data.score}</span>
            <span className="text-xs text-muted-foreground">Score</span>
          </div>
        </div>
      </div>

      {/* Validation Checks */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Audit Details & AI Reasoning</h4>
        <div className="space-y-4">
          {data.checks.map((check: any, index: number) => (
            <div key={index} className={`flex flex-col gap-2 p-4 rounded-lg ${getStatusBg(check.status)} border border-border/50`}>
              <div className="flex items-start gap-3">
                <StatusIcon status={check.status} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{check.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{check.details}</p>
                </div>
              </div>

              {/* AI Audit Reasoning Drill-down */}
              {check.aiAudit && (
                <div className="mt-3 grid grid-cols-1 gap-3 pt-3 border-t border-border/20">
                  <div className="bg-background/40 p-2 rounded border border-border/10">
                    <p className="text-[10px] uppercase font-bold text-primary mb-1">Why it's a risk</p>
                    <p className="text-xs text-muted-foreground italic">"{check.aiAudit.why_is_wrong}"</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-background/40 p-2 rounded border border-border/10">
                      <p className="text-[10px] uppercase font-bold text-primary mb-1">Auditor Question</p>
                      <p className="text-xs font-medium text-foreground">{check.aiAudit.auditor_question}</p>
                    </div>
                    <div className="bg-background/40 p-2 rounded border border-border/10">
                      <p className="text-[10px] uppercase font-bold text-destructive mb-1">Financial Impact</p>
                      <p className="text-xs font-semibold text-foreground">{check.aiAudit.financial_risk}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Anomaly Detection */}
      {data.anomalies.length > 0 && (
        <div className="pb-4">
          <h4 className="text-sm font-medium text-foreground mb-3">Recommendations</h4>
          <div className="space-y-2">
            {data.anomalies.map((anomaly, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[oklch(0.7_0.18_85)]/10">
                <Info className="h-4 w-4 text-[oklch(0.7_0.18_85)] mt-0.5" />
                <p className="text-sm text-foreground">{anomaly.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
