"use client";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="border-t w-screen flex flex-col items-center bg-gray-900">
      <div className="container flex flex-col items-center gap-4 py-20 text-center">
        <h2 className="text-3xl max-w-[80vw] text-center font-bold leading-tight tracking-tighter md:text-4xl text-white">
          Ready to Find Your Perfect Laptop?
        </h2>
        <p className="max-w-[80vw] text-gray-400">
          Get personalized recommendations based on your needs and budget.
        </p>
        <div className="flex gap-4">
          {/* <Link href="/home"> */}
          <Button
            onClick={() => {
              location.href = "/home";
            }}
            size="lg"
            className="bg-white hover:bg-white/80 text-gray-900"
          >
            Get Started
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
}
