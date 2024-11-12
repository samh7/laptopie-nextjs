"use client";
import { useState, useEffect } from "react";
import { specifications } from "../../../data/data";
import HeroSection from "@/components/specifications/HeroSection";
import SearchSection from "../../../components/specifications/SearchSection";
import SpesList from "../../../components/specifications/SpesList";
import { Specification } from "@/lib/interfaces/interfaces";

export default function Specifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSpecs, setFilteredSpecs] =
    useState<Specification[]>(specifications);

  useEffect(() => {
    const filtered = specifications.filter(
      (spec) =>
        spec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spec.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSpecs(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <HeroSection />
      <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SpesList filteredSpecs={filteredSpecs} />
    </div>
  );
}
