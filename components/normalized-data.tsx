"use client"

import { ArrowRight, Check, X } from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface NormalizedDataProps {
  data: {
    vendor: Record<string, { before: string; after: string; valid?: boolean }>
    dates: Record<string, { before: string; after: string }>
    amounts: Record<string, { before: string; after: string }>
  }
}

function BeforeAfterRow({
  label,
  before,
  after,
  showBeforeAfter,
  valid,
}: {
  label: string
  before: string
  after: string
  showBeforeAfter: boolean
  valid?: boolean
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/10 last:border-0 group">
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{label}</span>
        {showBeforeAfter && (
          <span className="text-[10px] font-mono text-muted-foreground/40 line-through truncate max-w-[150px]">{before}</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {showBeforeAfter && <ArrowRight className="h-3 w-3 text-primary/30 group-hover:text-primary/60 transition-colors" />}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${valid === false ? 'bg-destructive/5 border-destructive/20' : 'bg-background border-border/50 group-hover:border-primary/20'}`}>
          <span className={`text-xs font-mono font-bold ${valid === false ? 'text-destructive' : 'text-foreground'}`}>{after}</span>
          {valid !== undefined && (
            valid ? (
              <Check className="h-3 w-3 text-[oklch(0.55_0.18_145)]" />
            ) : (
              <X className="h-3 w-3 text-destructive" />
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default function NormalizedData({ data }: NormalizedDataProps) {
  const [showBeforeAfter, setShowBeforeAfter] = useState(true)

  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/10">
      {/* Premium Toggle Area */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/20 border border-border/50 rounded-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">Normalization View</span>
          <span className="text-[9px] text-muted-foreground italic">Compare raw vs. structured data</span>
        </div>
        <div className="flex items-center gap-3">
          <Label htmlFor="before-after" className="text-[10px] font-bold text-muted-foreground uppercase cursor-pointer">
            Diff Mode
          </Label>
          <Switch id="before-after" checked={showBeforeAfter} onCheckedChange={setShowBeforeAfter} />
        </div>
      </div>

      {/* Data Sections */}
      {[
        { title: "Legal Entities", data: data.vendor, icon: "👤" },
        { title: "Temporal Mapping", data: data.dates, icon: "📅" },
        { title: "Financial Quantities", data: data.amounts, icon: "💰" },
      ].map((section) => (
        <div key={section.title} className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <span className="text-xs">{section.icon}</span>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{section.title}</h4>
          </div>
          <div className="bg-muted/10 border border-border/30 rounded-2xl p-5 space-y-1">
            {Object.entries(section.data).map(([key, val]) => (
              <BeforeAfterRow
                key={key}
                label={key.replace(/([A-Z])/g, " $1").trim()}
                before={(val as any).before}
                after={(val as any).after}
                showBeforeAfter={showBeforeAfter}
                valid={(val as any).valid}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
