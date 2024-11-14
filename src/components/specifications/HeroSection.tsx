"use client";
import { Cpu, HardDrive, Monitor, Battery } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-[6.25rem] pt-[3.75rem]">
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex max-w-[46rem] flex-col">
            
            <h1 className=" 
            text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Understanding Laptop{" "}
              <span className="text-primary">Specifications</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              From processors to display quality, learn what each specification means 
              and how it affects your laptop's performance.
            </p>
            <div className="mt-8 grid w-full grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm">
                <Cpu className="h-6 w-6 text-primary" />
                <span className="text-base font-medium">Processing Power</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm">
                <HardDrive className="h-6 w-6 text-primary" />
                <span className="text-base font-medium">Storage Options</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm">
                <Monitor className="h-6 w-6 text-primary" />
                <span className="text-base font-medium">Display Quality</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm">
                <Battery className="h-6 w-6 text-primary" />
                <span className="text-base font-medium">Battery Life</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-xl overflow-hidden shadow-xl lg:translate-x-12">
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/60 to-background/20 z-10" /> */}
            <img
              src="/873966.jpg"
              alt="Laptop Components and Specifications"
              className="object-cover w-full h-full scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
