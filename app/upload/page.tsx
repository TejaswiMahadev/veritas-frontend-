"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UploadPage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [status, setStatus] = useState<"idle" | "uploading" | "processing" | "success">("idle")

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setStatus("uploading")
    setIsProcessing(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const data = await response.json()
      setStatus("success")

      setTimeout(() => {
        router.push(`/results/${data.auditId}`)
      }, 1500)
    } catch (error) {
      console.error("Upload error:", error)
      setStatus("idle")
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground">Upload Invoice</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Submit Invoice for Audit</CardTitle>
            <CardDescription>Upload PDF invoices for AI-powered analysis and compliance checking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Dropzone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative rounded-lg border-2 border-dashed transition-all p-12 text-center cursor-pointer ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : file
                    ? "border-green-500/50 bg-green-500/5"
                    : "border-muted-foreground/30 bg-background/50 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <input
                type="file"
                onChange={handleFileSelect}
                accept=".pdf,.png,.jpg,.jpeg,.webp"
                className="absolute inset-0 opacity-0 cursor-pointer"
                disabled={isProcessing}
              />
              <div className="flex flex-col items-center gap-3">
                {file ? (
                  <>
                    <CheckCircle2 className="h-12 w-12 text-green-500/70" />
                    <div>
                      <p className="font-semibold text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">Drag and drop your invoice</p>
                      <p className="text-sm text-muted-foreground">or click to browse</p>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-2">PDF, PNG, JPG, or WebP files</p>
                  </>
                )}
              </div>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium text-foreground text-sm">Upload successful!</p>
                  <p className="text-xs text-muted-foreground">Redirecting to results...</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleUpload}
                disabled={!file || isProcessing}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isProcessing ? "Processing..." : "Analyze Invoice"}
              </Button>
              {file && (
                <Button
                  onClick={() => {
                    setFile(null)
                    setStatus("idle")
                  }}
                  variant="outline"
                  disabled={isProcessing}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
