import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`, // Store API key in env file
      },
      body: JSON.stringify({
        prompt: { text: prompt },
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.candidates[0]?.output || "I couldn't generate a response." });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong with Gemini AI." }, { status: 500 });
  }
}
