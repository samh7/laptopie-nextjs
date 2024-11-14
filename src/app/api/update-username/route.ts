import { NextResponse } from "next/server";
import { prisma } from "@/lib/auth/db";

export async function POST(req: Request) {
  try {
    const { email, username } = await req.json();

    if (!email || !username) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Only update if username is different
    if (user.name !== username) {
      await prisma.user.update({
        where: { email },
        data: { name: username },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[UPDATE_USERNAME_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 