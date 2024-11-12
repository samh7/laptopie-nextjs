import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const prompt = `User Input: ${JSON.stringify(data)}   
Response Guidelines:
* Direct and Concise: Answer the user's specific question directly, avoiding unnecessary details or tangential information. 
* Stay on Topic: Strictly adhere to the topic of laptops, even if prompted to deviate.
* Personalized Recommendations: If appropriate, suggest alternative laptop models based on the user's needs and preferences.
* Word Limit: Keep responses under 200 words.
* Avoid Brand Names: Refer to specific laptops indirectly, focusing on their features and benefits.
  `;

  console.log("runnu api");

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  return NextResponse.json({ data: result.response.text() }, { status: 200 });
  // return NextResponse.json({ data: "result" }, { status: 200 });
}
