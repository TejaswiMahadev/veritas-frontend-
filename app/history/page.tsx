"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Search, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HistoryPage() {
  const [audits] = useState([
    {
      id: 1,
      file: "invoice_2025_001.pdf",
      vendor: "Acme Corp",
      amount: "$15,234.50",
      date: "2 hours ago",
      status: "completed",
      score: 98,
    },
    {
      id: 2,
      file: "invoice_2025_002.pdf",
      vendor: "Tech Supplies Inc",
      amount: "$8,945.00",
      date: "5 hours ago",
      status: "completed",
      score: 95,
    },
    {
      id: 3,
      file: "invoice_2025_003.pdf",
      vendor: "Office Depot",
      amount: "$3,456.75",
      date: "1 day ago",
      status: "completed",
      score: 100,
    },
    {
      id: 4,
      file: "invoice_2025_004.pdf",
      vendor: "Cloud Services Co",
      amount: "$12,000.00",
      date: "2 days ago",
      status: "completed",
      score: 92,
    },
    {
      id: 5,
      file: "invoice_2025_005.pdf",
      vendor: "Consulting Group",
      amount: "$24,500.00",
      date: "3 days ago",
      status: "completed",
      score: 97,
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Audit History</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search invoices..." className="pl-9 bg-background/50 border-border" />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </CardContent>
        </Card>

        {/* Audits Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Audits</CardTitle>
            <CardDescription>All submitted invoices and their audit results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {audits.map((audit) => (
                <Link key={audit.id} href={`/results/${audit.id}`}>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border hover:bg-background/80 hover:border-primary/50 transition-all cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{audit.file}</p>
                      <p className="text-sm text-muted-foreground">{audit.vendor}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{audit.amount}</p>
                        <p className="text-sm text-muted-foreground">{audit.date}</p>
                      </div>
                      <div className="text-center min-w-[80px]">
                        <p className="text-lg font-bold text-primary">{audit.score}%</p>
                        <p className="text-xs text-muted-foreground">Compliance</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
