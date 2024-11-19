import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextAuthProvider from "../components/auth/NextAuthProvider";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { BiLoaderCircle } from "react-icons/bi";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laptopie",
  description: "Best laptop recommendation system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen grid place-items-center text-gray-900">
          <BiLoaderCircle className="h-4 w-4 animate-spin" />
        </div>
      }
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <Header /> */}
          <NextAuthProvider>
            <main className="flex min-h-screen min-w-screen flex-col items-center justify-center">
              <Toaster position="top-center" expand={true} richColors />
              <div className="">{children}</div>
            </main>
          </NextAuthProvider>
          {/* <Footer /> */}
        </body>
      </html>
    </Suspense>
  );
}
