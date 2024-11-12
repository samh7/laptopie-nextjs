import { Laptop } from "@/lib/interfaces/interfaces";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// pages/api/geminiommendations.ts
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const userInput = typeof data === "string" ? data : JSON.stringify(data);
  const prompt = `
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
    All metrics should be in the metric system.
  `;

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
const RecommnedationString: string = `interface LaptopSpecs {
  cpu: string;
  gpu: string;
  ram: number;
  storage: number;
  display: string;
  battery: number;
  weight?: string;
}
interface Laptop {
  name: string;
  imageUrl: string;
  priceRange: number;
  specs: LaptopSpecs;
  pros: string[];
  cons: string[];
  shoppingLinks: string[];
  summary: string;
}

interface Recommnedation {
  recommendations: Laptop[];
}


`;

const userAnswers: Laptop[] = [
  {
    name: "Acer Swift 3 SF314-512",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71pQ74w57QL._AC_SL1500_.jpg",
    priceRange: 800,
    specs: {
      cpu: "Intel Core i5-1255U",
      gpu: "Intel Iris Xe Graphics",
      ram: 8,
      storage: 512,
      display: "14-inch Full HD (1920 x 1080)",
      battery: 10,
      weight: "1.4kg",
    },
    pros: [
      "Lightweight and portable design",
      "Long battery life",
      "Solid performance for everyday tasks",
      "Affordable price",
      "Good display quality",
    ],
    cons: ["Average gaming performance", "Limited upgrade options"],
    shoppingLinks: [
      "https://www.amazon.com/Acer-Swift-SF314-512-7223/dp/B09Q6Y416S",
      "https://www.smartprix.com/mobiles/acer-swift-3-sf314-512-7223/",
    ],
    summary:
      "The Acer Swift 3 SF314-512 is a great all-around laptop that offers a balance of portability, performance, and affordability. It's ideal for users who need a laptop for everyday tasks, including work, school, and entertainment.",
  },
  {
    name: "Lenovo IdeaPad Flex 5 14",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71G7Z35V6SL._AC_SL1500_.jpg",
    priceRange: 900,
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      gpu: "AMD Radeon Graphics",
      ram: 8,
      storage: 512,
      display: "14-inch Full HD (1920 x 1080) touchscreen",
      battery: 8,
      weight: "1.5kg",
    },
    pros: [
      "Versatile 2-in-1 design",
      "Good performance for work and entertainment",
      "Excellent display quality",
      "Long battery life",
      "Comfortable keyboard and trackpad",
    ],
    cons: [
      "Slightly heavier than the Acer Swift 3",
      "Not as powerful as some other options in this price range",
    ],
    shoppingLinks: [
      "https://www.amazon.com/Lenovo-IdeaPad-Flex-5-14/dp/B08M89515J",
      "https://www.smartprix.com/mobiles/lenovo-ideapad-flex-5-14/",
    ],
    summary:
      "The Lenovo IdeaPad Flex 5 14 is a solid choice for users who want a versatile laptop that can be used for both work and entertainment. It features a 2-in-1 design, a touchscreen display, and a long battery life.",
  },
  {
    name: "Dell XPS 13 9315",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71N0q6sE9HL._AC_SL1500_.jpg",
    priceRange: 1300,
    specs: {
      cpu: "Intel Core i7-1185G7",
      gpu: "Intel Iris Xe Graphics",
      ram: 16,
      storage: 512,
      display: "13.4-inch Full HD (1920 x 1200) touchscreen",
      battery: 8,
      weight: "1.2kg",
    },
    pros: [
      "Premium design and build quality",
      "Excellent display quality",
      "Powerful performance for demanding tasks",
      "Compact and lightweight design",
      "Good battery life",
    ],
    cons: ["Expensive", "No Thunderbolt 4 ports"],
    shoppingLinks: [
      "https://www.amazon.com/Dell-XPS-9315-13-4-Inch/dp/B091Z2P716",
      "https://www.smartprix.com/mobiles/dell-xps-13-9315/",
    ],
    summary:
      "The Dell XPS 13 9315 is a premium ultrabook that offers a combination of performance, portability, and style. It's an excellent choice for users who need a laptop for demanding tasks, such as video editing and software development.",
  },
  {
    name: "ASUS ZenBook 13 UX325",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71%2BP6f2tG9L._AC_SL1500_.jpg",
    priceRange: 1000,
    specs: {
      cpu: "Intel Core i7-1165G7",
      gpu: "Intel Iris Xe Graphics",
      ram: 16,
      storage: 512,
      display: "13.3-inch Full HD (1920 x 1080) touchscreen",
      battery: 12,
      weight: "1.1kg",
    },
    pros: [
      "Ultra-portable design",
      "Long battery life",
      "Excellent display quality",
      "Good performance for everyday tasks",
      "Affordable price for its features",
    ],
    cons: ["Limited upgrade options", "Average gaming performance"],
    shoppingLinks: [
      "https://www.amazon.com/ASUS-ZenBook-UX325-i7-1165G7/dp/B08KG7TZ6H",
      "https://www.smartprix.com/mobiles/asus-zenbook-13-ux325/",
    ],
    summary:
      "The ASUS ZenBook 13 UX325 is an excellent choice for users who prioritize portability and battery life. It's a lightweight and compact laptop that offers good performance for everyday tasks.",
  },
  {
    name: "HP Envy x360 13",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71N1h%2B9e-JL._AC_SL1500_.jpg",
    priceRange: 900,
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      gpu: "AMD Radeon Graphics",
      ram: 8,
      storage: 512,
      display: "13.3-inch Full HD (1920 x 1080) touchscreen",
      battery: 9,
      weight: "1.3kg",
    },
    pros: [
      "Versatile 2-in-1 design",
      "Excellent display quality",
      "Good performance for work and entertainment",
      "Long battery life",
      "Affordable price",
    ],
    cons: [
      "Not as powerful as some other options in this price range",
      "Limited upgrade options",
    ],
    shoppingLinks: [
      "https://www.amazon.com/HP-Envy-x360-13-ay0000/dp/B092T7Q1K1",
      "https://www.smartprix.com/mobiles/hp-envy-x360-13-ay0000/",
    ],
    summary:
      "The HP Envy x360 13 is a versatile laptop that offers a good balance of performance, portability, and affordability. It's a great option for users who need a laptop for both work and entertainment.",
  },
];
