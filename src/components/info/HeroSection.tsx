"use client";
import { Laptop } from "@/lib/interfaces/interfaces";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Image from "next/image";

export default function HeroSection({
  reccomendedLaptop,
  image,
}: {
  reccomendedLaptop: Laptop;
  image: string;
}) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="border-b bg-background">
      <div className="md:w-[95vw] px-4 py-20 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center start gap-12 ">
          <div className="space-y-8  md:mt-14">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {reccomendedLaptop?.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {reccomendedLaptop?.summary}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-3xl font-bold">
                KSH.{reccomendedLaptop?.priceRange.toLocaleString()}
              </span>
              <Button
                variant="outline"
                onClick={handlePrint}
                className="inline-flex items-center gap-2"
              >
                <Printer className="h-4 w-4" />
                Print Specs
              </Button>
            </div>
          </div>
          <div className="relative group w-full md:w-auto flex justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Image
              width={500}
              height={500}
              src={image}
              alt={reccomendedLaptop?.name}
              className="relative  rounded-xl  border bg-muted w-[90vw] max-w-[500px] object-cover hover:scale-[1.02] transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
