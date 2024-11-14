import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default withAuth(
  async function middleware(req) {
    try {
      const token = await getToken({ req });
      
      if (!token?.email) {
        return NextResponse.next();
      }

      // Construct the full URL using the request's origin
      const baseUrl = req.nextUrl.origin;
      const response = await fetch(`${baseUrl}/api/check-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: token.email }),
      });

      if (!response.ok) {
        // User doesn't exist anymore, clear cookies and redirect to home
        const redirectResponse = NextResponse.redirect(new URL("/", req.url));
        // Clear all possible auth cookies
        const cookies = [
          'next-auth.session-token',
          'next-auth.callback-url',
          'next-auth.csrf-token',
          '__Secure-next-auth.session-token',
          '__Secure-next-auth.callback-url',
          '__Host-next-auth.csrf-token',
        ];

        cookies.forEach(cookie => {
          redirectResponse.cookies.delete(cookie);
        });

        return redirectResponse;
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    // "/home/:path*",
    "/api/laptops/:path*",
  ],
};