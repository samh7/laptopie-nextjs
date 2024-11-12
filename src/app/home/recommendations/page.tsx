"use client";
import { useEffect, useState } from "react";
import { Laptop } from "@/lib/interfaces/interfaces";
import { getLaptopsLocalStore } from "@/lib/utils";
import { getRandomLaptopImage } from "../../../data/data";
import HeroSection from "@/components/recommendations/HeroSection";
import Results from "@/components/recommendations/Results";

export default function Recommendations() {
  const [reccomendations, setRecommendations] = useState<Laptop[]>([]);
  const [laptopImages, setLaptopImages] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const data = getLaptopsLocalStore();
    setRecommendations(data);
  }, []);

  useEffect(() => {
    if (reccomendations && reccomendations.length > 0) {
      const images = reccomendations.reduce((acc, laptop) => {
        acc[laptop.name] = getRandomLaptopImage(laptop.name);
        return acc;
      }, {} as { [key: string]: string });

      setLaptopImages(images);
    }
  }, [reccomendations]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <HeroSection reccomendations={reccomendations} />
      <Results reccomendations={reccomendations} laptopImages={laptopImages} />
    </div>
  );
}
