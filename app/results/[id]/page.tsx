"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Download, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResultsPage() {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/results/${params.id}`)
        if (!response.ok) throw new Error("Failed to fetch results")
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-12 w-12 text-primary/50 mx-auto mb-3 animate-spin" />
          <p className="text-muted-foreground">Loading results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Audit Results</h1>
              <p className="text-sm text-muted-foreground">ID: {params.id}</p>
            </div>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Status</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500/70" />
              <span className="font-semibold text-foreground">Completed</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Compliance Score</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-primary">98%</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Fields Extracted</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold text-primary">24/24</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Issues Found</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500/70" />
              <span className="font-semibold text-foreground">1 Warning</span>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="extraction" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="extraction">Extraction</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
            <TabsTrigger value="report">Audit Report</TabsTrigger>
          </TabsList>

          {/* Extraction Tab */}
          <TabsContent value="extraction">
            <Card>
              <CardHeader>
                <CardTitle>Extracted Fields</CardTitle>
                <CardDescription>Data successfully parsed from the invoice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground">Invoice Number</label>
                    <p className="font-semibold text-foreground mt-1">INV-2025-001</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Date</label>
                    <p className="font-semibold text-foreground mt-1">2025-12-11</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Vendor</label>
                    <p className="font-semibold text-foreground mt-1">Acme Corporation</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Amount</label>
                    <p className="font-semibold text-foreground mt-1">$15,234.50</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Tax</label>
                    <p className="font-semibold text-foreground mt-1">$1,523.45</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Total</label>
                    <p className="font-semibold text-foreground mt-1">$16,757.95</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Validation Tab */}
          <TabsContent value="validation">
            <Card>
              <CardHeader>
                <CardTitle>Validation Results</CardTitle>
                <CardDescription>Data consistency and accuracy checks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Currency consistency</p>
                    <p className="text-xs text-muted-foreground">All amounts use USD</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Tax calculation verified</p>
                    <p className="text-xs text-muted-foreground">10% tax rate applied correctly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <AlertTriangle className="h-5 w-5 text-yellow-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Payment terms unclear</p>
                    <p className="text-xs text-muted-foreground">Net-30 not explicitly stated</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fraud Detection Tab */}
          <TabsContent value="fraud">
            <Card>
              <CardHeader>
                <CardTitle>Fraud Detection Analysis</CardTitle>
                <CardDescription>Compliance and risk assessment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Vendor validation</p>
                    <p className="text-xs text-muted-foreground">Vendor found in approved list</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Amount within threshold</p>
                    <p className="text-xs text-muted-foreground">No unusual amount spike detected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500/70 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Duplicate check</p>
                    <p className="text-xs text-muted-foreground">No duplicate invoice detected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Report Tab */}
          <TabsContent value="report">
            <Card>
              <CardHeader>
                <CardTitle>Audit Report</CardTitle>
                <CardDescription>Complete audit summary and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Summary</h4>
                  <p className="text-sm text-muted-foreground">
                    Invoice INV-2025-001 has been successfully processed with a 98% compliance score. All critical
                    fields were extracted and validated. One minor warning regarding payment terms clarity.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Recommendations</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Clarify payment terms in future invoices</li>
                    <li>Ensure vendor contact information is always included</li>
                    <li>Consider standardizing invoice date format</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
