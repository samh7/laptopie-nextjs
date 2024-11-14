import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const laptopData = await request.json();

    // Ensure the userId matches the session user
    if (laptopData.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Convert price to number if it's a string
    const price = typeof laptopData.price === 'string' 
      ? parseFloat(laptopData.price) 
      : laptopData.price;

    // Create or update the laptop
    const savedLaptop = await prisma.laptop.upsert({
      where: {
        id: laptopData.id || 'new', // Use 'new' for new laptops
      },
      update: {
        name: laptopData.name,
        brand: laptopData.brand,
        price: price,
        imageUrl: laptopData.imageUrl,
        specs: laptopData.specs,
        pros: laptopData.pros,
        cons: laptopData.cons,
        summary: laptopData.summary,
        shoppingLinks: laptopData.shoppingLinks,
        chatMessages: laptopData.chatMessages,
        updatedAt: new Date(),
      },
      create: {
        name: laptopData.name,
        brand: laptopData.brand,
        price: price,
        imageUrl: laptopData.imageUrl,
        userId: session.user.id,
        specs: laptopData.specs,
        pros: laptopData.pros,
        cons: laptopData.cons,
        summary: laptopData.summary,
        shoppingLinks: laptopData.shoppingLinks,
        chatMessages: laptopData.chatMessages,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(savedLaptop);
  } catch (error) {
    console.error('Error saving laptop:', error);
    return NextResponse.json(
      { error: "Failed to save laptop" },
      { status: 500 }
    );
  }
} 