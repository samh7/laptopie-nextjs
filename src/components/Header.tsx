"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header({ userLoggedIn }: { userLoggedIn: boolean }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Laptopie
        </Link>
        <nav className="md:flex gap-8 space-x-3">
          {["Home", "Blog", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          {!userLoggedIn ? (
            <>
              <Button onClick={() => signIn()} className="px-7 py-4">
                Login
              </Button>
            </>
          ) : (
            <Button
              onClick={() => signOut()}
              className="px-7 py-4"
              variant="destructive"
              // className="px-4 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
