import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/auth/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { 
        id: true,
        deletedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found", code: "USER_NOT_FOUND" }, 
        { status: 404 }
      );
    }

    if (user.deletedAt) {
      return NextResponse.json(
        { error: "User was deleted", code: "USER_DELETED" }, 
        { status: 410 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error checking user:", error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
} 