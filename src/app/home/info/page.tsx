"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChatComponent } from "../../../components/info/ChatComponent";
import { Laptop } from "../../../lib/interfaces/interfaces";
import { getLaptopFromLocalStore } from "@/lib/utils";
import HeroSection from "@/components/info/HeroSection";
import KeyFeatures from "@/components/info/KeyFeatures";
import DetailedSpecs from "@/components/info/DetailedSpecs";
import ProsAndCons from "@/components/info/ProsAndCons";
import ShoppingLinks from "@/components/info/ShoppingLinks";

// export const dynamic = "force-dynamic";

export default function LaptopInfo() {
  const searchParams = useSearchParams();
  const [reccomendedLaptop, setReccomendedLaptop] = useState<Laptop>();
  const id: number = Number(searchParams?.get("id"));
  const image = `${searchParams?.get("image")}`;

  useEffect(() => {
    const data = getLaptopFromLocalStore(id);
    console.log(data);
    setReccomendedLaptop(data);
  }, [id]);

  if (!reccomendedLaptop) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-xl">Laptop not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 relative">
      <HeroSection reccomendedLaptop={reccomendedLaptop} image={image} />
      <KeyFeatures reccomendedLaptop={reccomendedLaptop} />
      <DetailedSpecs reccomendedLaptop={reccomendedLaptop} />
      <ProsAndCons reccomendedLaptop={reccomendedLaptop} />
      <ShoppingLinks reccomendedLaptop={reccomendedLaptop} />
      <ChatComponent laptopName={reccomendedLaptop?.name || "Unknown Laptop"} />
    </div>
  );
}
