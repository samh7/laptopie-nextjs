import { NextResponse } from "next/server";
// @ts-ignore
import bcrypt from "bcryptjs";
import { prisma } from "../../../../lib/auth/db";

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();

    if (!email || !username) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    console.log('📝 Attempting to create user:', { email, username });

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('⚠️ User already exists:', email);
      return new NextResponse("User already exists", { status: 400 });
    }

    // Create user with or without password
    const userData = {
      email,
      name: username,
      emailVerified: null,
      ...(password && { hashedPassword: await bcrypt.hash(password, 12) }),
    };

    const user = await prisma.user.create({
      data: userData,
    });

    console.log('✅ User created successfully:', {
      id: user.id,
      email: user.email,
      name: user.name,
      emailVerified: user.emailVerified
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.emailVerified
      }
    });
  } catch (error) {
    console.error('❌ [REGISTER_ERROR]:', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 