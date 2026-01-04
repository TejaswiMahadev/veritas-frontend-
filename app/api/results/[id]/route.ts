import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Here you would fetch results from your FastAPI backend
    // For now, return mock data

    const mockResults = {
      auditId: params.id,
      status: "completed",
      extraction: {
        invoiceNumber: "INV-2025-001",
        date: "2025-12-11",
        vendor: "Acme Corporation",
        amount: 15234.5,
        tax: 1523.45,
        total: 16757.95,
      },
      compliance: 98,
      fieldsExtracted: 24,
      issuesFound: 1,
    }

    return NextResponse.json(mockResults)
  } catch (error) {
    console.error("Results error:", error)
    return NextResponse.json({ error: "Failed to fetch results" }, { status: 500 })
  }
}
