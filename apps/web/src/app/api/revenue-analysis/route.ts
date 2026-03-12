import { NextResponse } from 'next/server';
import { analyzeRevenueLeaks } from '@valence/ai';

export async function GET(request: Request) {
  // Demo calling the AI package
  const analysisResult = await analyzeRevenueLeaks({ context: "sample opportunities data" });
  return NextResponse.json({ success: true, data: analysisResult });
}
