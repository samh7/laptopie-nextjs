"use server";

import { QuizAnswers } from "@/lib/interfaces/interfaces";

export async function getRecommendations(data: QuizAnswers | string) {
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

export async function getRecommendationsImage(data: File | FormDataEntryValue | FormData) {
  "use server";

  // console.log(JSON.stringify(data));
  const res = await fetch(`${process.env.LAPTOPIE_URL}/api/reccomendImage`, {
    method: "POST",
    body: data,
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

  const responseData = await res.json();
  return responseData;
}

export async function getRecommendationsFree(data: string) {
  "use server";

  console.log(JSON.stringify(data));
  const res = await fetch(`${process.env.LAPTOPIE_URL}/api/reccomendfree`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();
  return responseData;
}


export async function getLaptopHistory(userId: string) {
  "use server";

  const response = await fetch(
    `${process.env.LAPTOPIE_URL}/api/laptops/history?userId=6733d62703a6925c17c24c13`
  );

  const data = await response.json()
  console.log(data);
  return response;
}
