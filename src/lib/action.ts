"use server";

import { QuizAnswers } from "@/interfaces/interfaces";

export async function getRecommendations(data: QuizAnswers) {
  "use server";

  console.log(JSON.stringify(data));
  const res = await fetch(`${process.env.LAPTOPIE_URL}/api/recommend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();
  return responseData;
}

export async function chatWithLaptop(data: string) {
  "use server";

  console.log(JSON.stringify(data));
  const res = await fetch(`${process.env.LAPTOPIE_URL}/api/chatwithlaptop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Parse the response data before returning
  const responseData = await res.json();
  return responseData;
}
