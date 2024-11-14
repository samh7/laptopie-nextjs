"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacityBg = useTransform(scrollYProgress, [0, 0.4], [1, 0.35]);

  return (
    <motion.div
      ref={targetRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-black">
        <motion.img
          className="h-full w-full object-cover opacity-20"
          style={{
            opacity: opacityBg,
          }}
          src="/downloadfree-xl@2x.jpg"
          alt="Background pattern"
        />
      </div>
      <div className="absolute inset-0">
        <motion.img
          className="h-full w-full object-cover"
    
          src="/ei_1727896806410-removebg.png"
          alt="Background pattern"
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]">
      </div>

      <div className="relative z-10 mx-auto max-w-[64rem] px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            LAPTOPIE
          </h1>
          <p className="mx-auto text-[#f1f5f9] mt-6 max-w-[42rem] text-lg leading-normal  sm:text-xl sm:leading-8">
            Your Laptop Buying experience just got better.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`${localStorage.getItem("token") ? "/home" : "/sign-in"}`}
              className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
            {/* <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
            </Link> */}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  );
}
