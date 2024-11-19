import { RecommnedationString, userAnswers } from "@/data/data";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const userInput = typeof data === "string" ? data : JSON.stringify(data);
  const prompt = buildGeminiPrompt(userInput, RecommnedationString);

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY as string);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  return NextResponse.json(
    {
      aai: JSON.stringify(
        result.response.text().replace("```json", "").replace("```", "")
      ),
      data: JSON.stringify(userAnswers),
    },
    { status: 200 }
  );
}

const buildGeminiPrompt = (userInput: string, RecommnedationString: string) => {
  return `
    In this result, don't provide any options unrelated to laptops even if I ask you to or in any other circumstance and dont mention this in the answer.
    Here are the user answers for their laptop use cases/needs/ the user might have uploaded an image of a laptop:
    ${userInput}.
    Recommend good laptops for the selected use cases/needs / a similar laptop to the one in the image.
    Search for them on google.
    Give 2 shoppinglinks to the recommended laptops on Amazon using these urls https://www.amazon.com/s?k={laptop_name + cpu_name} and on smartprix using this url https://www.smartprix.com/products/?q={laptop_name + cpu_name}. 
    Also, provide a brief explanation of why you recommend these laptops.
    Also list the pros and cons of each laptop.
    Also give the laptop specs for each laptop.
    Give at least 5 recommendations.
    The answe should be a JSON object with the following structure:
    ${RecommnedationString}. It should be of type Recommendation.
    Dont fetch the images for the laptops return an empty string.
    All the fields should be strings and must have a value unless otherwise specified.
    Remember to use accurate specs for the laptops.
    If anything goes wrong please return all fields as empty strings.
    If user asks for unattainable specs like a laptop.
    Try to recommend as close to their budget as possible.
    The currency should be in kenya shillings.
    Recommend laptops for as low as 20000 shillings depending on query.
    All metrics should be in the metric system.
  `;
};
