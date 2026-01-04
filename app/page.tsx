"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Shield, Upload, CloudUpload, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { apiClient } from "@/lib/api-client"

export default function LandingPage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files[0])
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  const handleFileUpload = async (file: File) => {
    setIsUploading(true)
    setError(null)

    try {
      const response = await apiClient.uploadFile(file)

      const reader = new FileReader()
      reader.onload = () => {
        sessionStorage.setItem(
          `invoice_${response.file_id}`,
          JSON.stringify({
            name: file.name,
            size: file.size,
            type: file.type,
            fileId: response.file_id,
            dataUrl: reader.result as string, // Store base64 data URL
          }),
        )
        router.push(`/audit/${response.file_id}`)
      }
      reader.onerror = () => {
        // Fallback without preview
        sessionStorage.setItem(
          `invoice_${response.file_id}`,
          JSON.stringify({
            name: file.name,
            size: file.size,
            type: file.type,
            fileId: response.file_id,
          }),
        )
        router.push(`/audit/${response.file_id}`)
      }
      reader.readAsDataURL(file)
    } catch (err) {
      console.error("Upload failed:", err)
      setError(err instanceof Error ? err.message : "Failed to upload file. Please ensure the API server is running.")
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">{"Veritas"}</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="ghost" size="sm">
              API
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NIM-Powered 6-Agent Committee
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1] text-balance">
            Next-Gen <span className="text-primary italic">Audit</span> for <br />
            Government Procurement
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty font-medium opacity-80">
            Automatically extract, validate, and arbitrate financial documents with enterprise-grade AI agents and deterministic rules.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 rounded-2xl flex items-start gap-3 animate-in fade-in zoom-in duration-300">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-destructive">Upload Failed</p>
              <p className="text-sm text-destructive/80 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Upload Box */}
        <div
          className={`
            relative group overflow-hidden border-2 border-dashed rounded-[2rem] p-16 transition-all duration-500
            ${isDragging ? "border-primary bg-primary/5 scale-[1.02]" : "border-border hover:border-primary/40 hover:bg-muted/30"}
            ${isUploading ? "pointer-events-none opacity-60" : "cursor-pointer"}
            shadow-xl shadow-transparent hover:shadow-primary/5
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={handleFileSelect}
          />

          <div className="flex flex-col items-center gap-6">
            <div className="h-24 w-24 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              {isUploading ? (
                <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="relative">
                  <CloudUpload className="h-12 w-12 text-primary" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full border-2 border-background animate-pulse" />
                </div>
              )}
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-foreground">
                {isUploading ? "Processing Dossier..." : "Drop Procurement Document"}
              </p>
              <p className="text-muted-foreground font-medium underline underline-offset-4 decoration-primary/30">
                or select from secure directory
              </p>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
                <FileText className="h-3 w-3" />
                <span>PDF/A</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
                <Upload className="h-3 w-3" />
                <span>Legacy Scan</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Agent Pipeline Features */}
        <div className="mt-24 space-y-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Veritas Stack</h2>
            <p className="text-2xl font-bold">6-Stage Collaborative Intelligence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { step: "1", title: "NIM Extract", desc: "OCR & Field Mapping" },
              { step: "2", title: "Cleanse", desc: "Standardization" },
              { step: "3", title: "Rules", desc: "Hard Validations" },
              { step: "4", title: "Arbitrate", desc: "Conflict Resolution" },
              { step: "5", title: "Trust", desc: "Vendor Profiling" },
              { step: "6", title: "Report", desc: "Audit Dossier" },
            ].map((item) => (
              <div key={item.step} className="group p-4 rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/30 hover:bg-background transition-all">
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                <p className="text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
