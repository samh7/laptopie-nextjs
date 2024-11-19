import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/auth/db";


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    await prisma.$connect(); // Ensure connection is established

    const laptops = await prisma.laptop.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        brand: true,
        brandImage: true,
        price: true,
        imageUrl: true,
        createdAt: true,
      }
    });
    return NextResponse.json({ laptops: laptops }, { status: 200 });
  } catch (error) {
    console.error("[LAPTOP_HISTORY_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch laptop history" }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Clean up connection
  }
} 