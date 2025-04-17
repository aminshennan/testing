import { NextResponse } from "next/server";
import OpenAI from "openai";

// For build time - use a dummy API key 
// In production, ensure the real key is set in environment variables
const apiKey = process.env.OPENAI_API_KEY || 'dummy-key-for-build-time';
const openai = new OpenAI({ apiKey });

export const runtime = 'edge';

export async function POST(req: Request) {
  // Check if we're using the real API key
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    const audioFile = formData.get('file') as File;
    
    if (!audioFile) {
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 });
    }

    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error processing audio:", error);
    return NextResponse.json({ error: "Failed to process audio" }, { status: 500 });
  }
}
