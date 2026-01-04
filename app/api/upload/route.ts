import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Here you would send the file to your FastAPI backend
    // For now, return a mock response
    const auditId = Math.random().toString(36).substring(7)

    return NextResponse.json({
      success: true,
      auditId,
      message: "Invoice submitted for analysis",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
