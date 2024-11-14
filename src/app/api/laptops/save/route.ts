import { NextResponse } from "next/server";
import { prisma } from "@/lib/auth/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth";
import { SavedLaptop } from "@/lib/interfaces/interfaces";
import { ChatMessage } from "@prisma/client";
import { JsonObject } from "next-auth/adapters";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const laptopData: SavedLaptop = await request.json();

    // Ensure the userId matches the session user
    if (laptopData.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Create or update the laptop
    const savedLaptop = await prisma.laptop.upsert({
      where: {
        id: laptopData.id || 'new',
      },
      update: {
        name: laptopData.name,
        imageUrl: laptopData.imageUrl,
        brandImage: laptopData.brandImage,
        price: laptopData.price as unknown as string,
        specs: laptopData.specs as unknown as JsonObject,
        pros: laptopData.pros,
        cons: laptopData.cons,
        summary: laptopData.summary,
        shoppingLinks: laptopData.shoppingLinks,
        chatMessages: laptopData.chatMessages as unknown as ChatMessage[],
        updatedAt: new Date(),
      },
      create: {
        name: laptopData.name,
        brand: laptopData.brand,
        imageUrl: laptopData.imageUrl,
        brandImage: laptopData.brandImage,
        price: laptopData.price as unknown as string,
        userId: session.user.id,
        specs: {
          create: {
            cpu: laptopData.specs.cpu,
            gpu: laptopData.specs.gpu,
            ram: laptopData.specs.ram,
            storage: laptopData.specs.storage,
            display: laptopData.specs.display,
            battery: laptopData.specs.battery,
            weight: laptopData.specs.weight
          }
        },
        pros: laptopData.pros,
        cons: laptopData.cons,
        summary: laptopData.summary,
        shoppingLinks: laptopData.shoppingLinks,
        chatMessages: laptopData.chatMessages as unknown as ChatMessage[],
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