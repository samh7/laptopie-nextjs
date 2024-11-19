"use client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header({ userLoggedIn }: { userLoggedIn: boolean }) {
  return (
    <header
      className="relative px-5 md:px-1 md:fixed top-0 left-0 right-0 z-50 bg-white/80 h-[150px] md:h-auto backdrop-blur-md"
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <div
        className="container mx-auto py-4 flex justify-between items-center
      "
      >
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Laptopie
        </Link>

        {/* div to minimize on small screens */}
        <div
          className="flex justify-between w-full md:w-auto md:space-x-10 items-center
      px-10
      absolute md:relative left-0 mt-[100px] md:left-auto md:mt-0
        "
        >
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
          <div className="flex gap-4 ">
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
      </div>
    </header>
  );
}
