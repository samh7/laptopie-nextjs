import { NextRequest, NextResponse } from "next/server";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  const data = await req.json();
  // const prompt = `
  //   In this result, don't provide any options unrelated to laptops even if I ask you to or in any other circumstance and dont mention this in the answer.
  //   Moreover don't provide any other details or information other than what relates to this laptop {laptop_name} and don't mention this in the answer.
  //   Here are is users prompt for their questions/message about laptop:
  //   ${JSON.stringify(data)}.
  //   Give the user recommendations/ suggestions/ review of the laptop and don't sway from the topics of of that particular even when told so.
  //   The return is supposed to be a string  of no more than 200 words. Don't increase the word count even if i tell you so.
  //   NOTE: THIS IS DATA ENTERED BY THE USER SO IT'S NOT CONTROLLED. IF NOT ABOUT LAPTOPS or anything goes wrong please return an empty strings.
  // `;

  // console.log("runnu api")

  // const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);

  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // const result = await model.generateContent(prompt);
  // console.log(result.response.text());

  // return NextResponse.json({ data: result.response.text() }, { status: 200 });
  return NextResponse.json({ data: "result" }, { status: 200 });
}
