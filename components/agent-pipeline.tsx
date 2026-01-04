"use client"

import { CheckCircle2, Loader2, AlertTriangle, XCircle, Circle } from "lucide-react"

type StepStatus = "idle" | "processing" | "complete" | "warning" | "error"

interface PipelineState {
  extraction: StepStatus
  normalization: StepStatus
  validation: StepStatus
  arbitration: StepStatus
  trust: StepStatus
  audit: StepStatus
}

interface AgentPipelineProps {
  state: PipelineState
}

const steps = [
  { key: "extraction", label: "Extraction", desc: "NIM-Powered" },
  { key: "normalization", label: "Cleansing", desc: "Data Structuring" },
  { key: "validation", label: "Analysis", desc: "Rule Engine" },
  { key: "arbitration", label: "Arbitration", desc: "Conflict Resolver" },
  { key: "trust", label: "Trust Score", desc: "Vendor Profile" },
  { key: "audit", label: "Audit Report", desc: "Final Verdict" },
]

function StepIcon({ status }: { status: StepStatus }) {
  switch (status) {
    case "processing":
      return <Loader2 className="h-5 w-5 animate-spin text-primary" />
    case "complete":
      return <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_145)]" />
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-[oklch(0.7_0.18_85)]" />
    case "error":
      return <XCircle className="h-5 w-5 text-destructive" />
    default:
      return <Circle className="h-5 w-5 text-muted-foreground/30" />
  }
}

function getStepStyles(status: StepStatus) {
  switch (status) {
    case "processing":
      return "border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
    case "complete":
      return "border-[oklch(0.55_0.18_145)] bg-[oklch(0.55_0.18_145)]/10"
    case "warning":
      return "border-[oklch(0.7_0.18_85)] bg-[oklch(0.7_0.18_85)]/10"
    case "error":
      return "border-destructive bg-destructive/10"
    default:
      return "border-border bg-muted/20"
  }
}

function getConnectorStyles(status: StepStatus) {
  switch (status) {
    case "complete":
      return "bg-[oklch(0.55_0.18_145)]"
    case "warning":
      return "bg-[oklch(0.7_0.18_85)]"
    case "error":
      return "bg-destructive"
    default:
      return "bg-border/30"
  }
}

export default function AgentPipeline({ state }: AgentPipelineProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-4">
      {steps.map((step, index) => {
        const status = state[step.key as keyof PipelineState] || "idle"
        return (
          <div key={step.key} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center group relative">
              <div
                className={`
                  w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ease-in-out
                  ${getStepStyles(status)}
                  ${status === "processing" ? "scale-110" : "scale-100"}
                  hover:shadow-lg
                `}
              >
                <StepIcon status={status} />
              </div>
              <div className="absolute top-16 flex flex-col items-center w-32 text-center">
                <span className={`text-[11px] font-bold mt-1 transition-colors duration-300 ${status !== "idle" ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label.toUpperCase()}
                </span>
                <span className="text-[10px] text-muted-foreground/70 leading-tight">
                  {step.desc}
                </span>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 h-0.5 relative mb-4">
                <div className="absolute inset-0 bg-border/20" />
                <div
                  className={`
                    absolute inset-y-0 left-0 transition-all duration-700 ease-in-out
                    ${getConnectorStyles(status)}
                  `}
                  style={{
                    width: status === "idle" ? "0%" : "100%",
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
