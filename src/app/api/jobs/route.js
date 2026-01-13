import JobMockdata from "@/data/job.json"
import { NextResponse } from "next/server"


export async function GET() {

    return NextResponse.json(JobMockdata)
    
}