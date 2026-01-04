"use client"

import type React from "react"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ExtractedFieldsProps {
  data: {
    vendor: Record<string, string>
    buyer: Record<string, string>
    invoice: Record<string, string>
    amounts: Record<string, string | number>
    lineItems: Array<{ description: string; qty: number; rate: number; amount: number }>
  }
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`transition-all duration-300 border ${isOpen ? 'border-primary/20 bg-background shadow-sm' : 'border-border/50 bg-muted/10'} rounded-2xl overflow-hidden mb-3`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`} />
          <span className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}>{title}</span>
        </div>
        <div className="h-6 w-6 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          {isOpen ? (
            <ChevronDown className="h-3 w-3 text-primary" />
          ) : (
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  )
}

function FieldRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-baseline py-1.5 border-b border-border/20 last:border-0 group">
      <span className="text-xs font-medium text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">{label}</span>
      <span className="text-xs font-mono font-semibold text-foreground bg-muted/30 px-2 py-0.5 rounded leading-none">{value}</span>
    </div>
  )
}

export default function ExtractedFields({ data }: ExtractedFieldsProps) {
  return (
    <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-350px)] pr-2 scrollbar-thin scrollbar-thumb-primary/10">
      <CollapsibleSection title="Legal Entities">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <h5 className="text-[9px] font-bold text-primary/60 uppercase tracking-widest pl-1">Vendor Identity</h5>
            <div className="p-3 bg-muted/30 rounded-xl space-y-2">
              <FieldRow label="Legal Name" value={data.vendor.name} />
              <FieldRow label="GSTIN/TAX ID" value={data.vendor.gstin} />
              <FieldRow label="PAN/REG" value={data.vendor.pan} />
            </div>
          </div>
          <div className="space-y-2">
            <h5 className="text-[9px] font-bold text-primary/60 uppercase tracking-widest pl-1">Buyer Entity</h5>
            <div className="p-3 bg-muted/30 rounded-xl space-y-2">
              <FieldRow label="Procurement Unit" value={data.buyer.name} />
              <FieldRow label="Unit GSTIN" value={data.buyer.gstin} />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Transaction Metadata">
        <FieldRow label="Reference No." value={data.invoice.number} />
        <FieldRow label="Issuance Date" value={data.invoice.date} />
        <FieldRow label="Maturity Date" value={data.invoice.dueDate} />
        <FieldRow label="Order Reference" value={data.invoice.poNumber} />
      </CollapsibleSection>

      <CollapsibleSection title="Financial Totals">
        <FieldRow label="Net Taxable" value={`₹${data.amounts.subtotal.toLocaleString()}`} />
        <FieldRow label="Statutory CGST" value={`₹${data.amounts.cgst.toLocaleString()}`} />
        <FieldRow label="Statutory SGST" value={`₹${data.amounts.sgst.toLocaleString()}`} />
        <div className="pt-2 mt-2 border-t border-primary/10">
          <div className="flex justify-between items-center p-3 bg-primary/5 rounded-xl border border-primary/10">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Gross Total</span>
            <span className="text-lg font-bold text-foreground">₹{data.amounts.total.toLocaleString()}</span>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Line Items" defaultOpen={false}>
        <div className="space-y-3">
          {data.lineItems.map((item, index) => (
            <div key={index} className="p-4 bg-muted/20 border border-border/30 rounded-2xl hover:bg-muted/40 transition-colors">
              <p className="font-bold text-xs text-foreground mb-3 leading-tight">{item.description}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase">Quantity</span>
                  <span className="text-xs font-mono font-semibold">{item.qty}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase">Unit Price</span>
                  <span className="text-xs font-mono font-semibold">₹{item.rate.toLocaleString()}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-bold text-primary/60 uppercase">Line Total</span>
                  <span className="text-xs font-mono font-bold text-primary">₹{item.amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  )
}
