"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ userLoggedIn }: { userLoggedIn: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative px-5 md:px-1 md:fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md h-auto">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Laptopie
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation and buttons container */}
        <div
          className={`
            ${isMenuOpen ? "flex" : "hidden"} 
            md:flex flex-col md:flex-row
            absolute md:relative
            top-full left-0
            w-full md:w-auto
            bg-white md:bg-transparent
            p-4 md:p-0
            gap-4 md:gap-0
            border-t md:border-none
            md:items-center
          `}
        >
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
            {[
              { key: "home", url: "home" },
              { key: "Blog", url: "home" },
              { key: "Contact Us", url: "home" },
            ].map((item) => (
              <Link
                key={item.key}
                href={`/${item.url.toLowerCase().replace(" ", "-")}`}
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.key}
              </Link>
            ))}
          </nav>

          <div className="md:ml-10">
            {!userLoggedIn ? (
              <Button
                onClick={() => signIn()}
                className="w-full md:w-auto px-4 py-2"
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={() => signOut()}
                variant="destructive"
                className="w-full md:w-auto px-4 py-2"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
