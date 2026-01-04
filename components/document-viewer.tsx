"use client"

import { useState } from "react"
import { FileText, AlertTriangle, ChevronDown, ChevronUp, ZoomIn, ZoomOut } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Anomaly {
  id: string
  title: string
  description: string
  severity: "critical" | "high" | "medium" | "low"
  field?: string
}

interface DocumentViewerProps {
  fileName: string
  fileType: string
  dataUrl?: string
  anomalies: Anomaly[]
  onAnomalyClick?: (anomaly: Anomaly) => void
}

export default function DocumentViewer({
  fileName,
  fileType,
  dataUrl,
  anomalies,
  onAnomalyClick,
}: DocumentViewerProps) {
  const [zoom, setZoom] = useState(100)
  const [showAnomalies, setShowAnomalies] = useState(true)
  const [selectedAnomaly, setSelectedAnomaly] = useState<string | null>(null)

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200))
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50))

  const severityColors = {
    critical: "bg-red-500/10 text-red-600 border-red-500/20",
    high: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    low: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  }

  const severityBadgeColors = {
    critical: "bg-red-500 text-white",
    high: "bg-orange-500 text-white",
    medium: "bg-yellow-500 text-black",
    low: "bg-blue-500 text-white",
  }

  const isPdf = fileType === "application/pdf"
  const isImage = fileType.startsWith("image/")

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Document Preview
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground w-12 text-center">{zoom}%</span>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground truncate">{fileName}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        {/* Document Display */}
        <div className="flex-1 bg-muted rounded-lg border border-border overflow-auto">
          <div
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}
            className="min-h-full transition-transform duration-200"
          >
            {dataUrl ? (
              isPdf ? (
                <iframe src={dataUrl} className="w-full h-[600px] border-0" title="Invoice PDF Preview" />
              ) : isImage ? (
                <img src={dataUrl || "/placeholder.svg"} alt="Invoice Preview" className="max-w-full h-auto" />
              ) : (
                <div className="flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Unsupported file type</p>
                  </div>
                </div>
              )
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px] p-8">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Document preview unavailable</p>
                  <p className="text-xs text-muted-foreground mt-1">{fileName}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Anomalies Panel */}
        {anomalies.length > 0 && (
          <div className="flex-shrink-0">
            <button
              onClick={() => setShowAnomalies(!showAnomalies)}
              className="w-full flex items-center justify-between p-2 rounded-lg bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">
                  {anomalies.length} Anomal{anomalies.length === 1 ? "y" : "ies"} Detected
                </span>
              </div>
              {showAnomalies ? (
                <ChevronUp className="h-4 w-4 text-destructive" />
              ) : (
                <ChevronDown className="h-4 w-4 text-destructive" />
              )}
            </button>

            {showAnomalies && (
              <div className="mt-2 space-y-2 max-h-[200px] overflow-auto">
                {anomalies.map((anomaly) => (
                  <button
                    key={anomaly.id}
                    onClick={() => {
                      setSelectedAnomaly(anomaly.id === selectedAnomaly ? null : anomaly.id)
                      onAnomalyClick?.(anomaly)
                    }}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-all",
                      severityColors[anomaly.severity],
                      selectedAnomaly === anomaly.id && "ring-2 ring-primary",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={cn("text-xs", severityBadgeColors[anomaly.severity])}>
                            {anomaly.severity}
                          </Badge>
                          {anomaly.field && (
                            <span className="text-xs text-muted-foreground">Field: {anomaly.field}</span>
                          )}
                        </div>
                        <p className="text-sm font-medium truncate">{anomaly.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{anomaly.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
