"use client";
import { FaArrowRight, FaCheckCircle, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiChip, BiCog, BiLaptop, BiMemoryCard } from "react-icons/bi";
import Link from "next/link";
import { Laptop } from "@/interfaces/interfaces";
import { getLaptopsLocalStore } from "@/lib/utils";

export default function Recommendations() {
  const [reccomendations, setRecommendations] = useState<Laptop[]>([]);
  const [laptopImages, setLaptopImages] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const data = getLaptopsLocalStore();
    // console.log(data.recommendations);
    setRecommendations(data);
  }, []); // Only run once on mount

  useEffect(() => {
    if (reccomendations && reccomendations.length > 0) {
      // Generate all laptop images once
      const images = reccomendations.reduce((acc, laptop) => {
        acc[laptop.name] = getRandomLaptopImage(laptop.name);
        return acc;
      }, {} as { [key: string]: string });

      setLaptopImages(images);
    }
  }, [reccomendations]); 
  // if (!reccomendations || reccomendations.length === 0) {
  //   return (
  //     <div className="min-h-screen bg-[#fafafa]">
  //       <div className="flex justify-center items-center h-screen">
  //         <div className="animate-spin rounded-full h-16 w-16 border-2 border-t-transparent border-blue-500"></div>
  //       </div>
  //     </div>
  //   );
  // }

  const localStorageChecker = () => {
    const data = getLaptopsLocalStore();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* remove for testing only */}
      <button
        onClick={localStorageChecker}
        className="bg-red-600 hover:bg-red-500 w-[200px] h-[60px] rounded-full text-white border-[2px] mt-[20px] fixed border-black"
      >
        CHECK LOCL STORAGE
      </button>

      {/* Enhanced Hero Section - Creative Design */}
      <div className="bg-gradient-to-r from-[#0067b8] to-[#2b5797] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Title Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-6">
              <FaRegStar className="text-yellow-300" />
              <span className="text-sm font-medium">
                {reccomendations.length} Perfect Matches Found
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Your Ideal Laptops
              <br />
              <span className="text-blue-200">Handpicked Just For You</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column - Price Range - Modified Design */}
            <div className="md:col-span-4 bg-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-6">Investment Range</h3>
              <div className="space-y-6">
                <div className="relative">
                  {/* Price Bar */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold">
                      ${Math.min(...reccomendations.map((l) => l.priceRange))}
                    </span>
                    <span className="text-3xl font-bold">
                      ${Math.max(...reccomendations.map((l) => l.priceRange))}
                    </span>
                  </div>

                  {/* Progress Bar with only Center Button */}
                  <div className="relative mt-4">
                    <div className="h-1.5 bg-white/20 rounded-full">
                      <div className="absolute inset-0 bg-blue-400/50 rounded-full"></div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Price Markers */}
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-blue-200">Entry Level</span>
                    <span className="text-sm text-blue-200">Premium</span>
                  </div>
                </div>

                <p className="text-sm text-blue-100 border-t border-white/10 pt-4">
                  Range includes options balancing performance with value.
                  Higher prices typically indicate premium features and better
                  performance.
                </p>
              </div>
            </div>

            {/* Right Column - Requirements Grid */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: <BiLaptop className="text-2xl" />,
                    title: "Usage",
                    desc: "Daily Computing",
                    bg: "bg-blue-400/10",
                  },
                  {
                    icon: <BiChip className="text-2xl" />,
                    title: "Performance",
                    desc: "Your Workload",
                    bg: "bg-blue-300/10",
                  },
                  {
                    icon: <BiMemoryCard className="text-2xl" />,
                    title: "Storage",
                    desc: "Your Files",
                    bg: "bg-blue-200/10",
                  },
                  {
                    icon: <BiCog className="text-2xl" />,
                    title: "Mobility",
                    desc: "Portability",
                    bg: "bg-blue-100/10",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bg} rounded-xl p-4 backdrop-blur-sm border border-white/5`}
                  >
                    <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-blue-200">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="flex-shrink-0">
                  <FaRegStar className="text-yellow-300 text-xl" />
                </div>
                <div className="space-y-2">
                  <p className="text-blue-100 font-medium">
                    Recommendations are ordered by match quality, with best
                    matches first
                  </p>
                  <p className="text-sm text-blue-200">
                    Each laptop is scored based on how well it matches your
                    requirements for performance, budget, and features. The
                    first recommendations will most closely align with your
                    needs, while later options may offer alternative trade-offs
                    or premium features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border border-slate-200 rounded-xl bg-white">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <FaRegStar className="text-[#0067b8] text-2xl" />
              <span className="text-lg font-medium text-slate-700">
                {reccomendations.length} matches found based on your preferences
              </span>
            </div>
          </div>

          {/* Laptop Cards */}
          <div className="divide-y divide-slate-200">
            {reccomendations.map((laptop, index) => (
              <Link
                href={{
                  pathname: "info/",
                  query: {
                    id: index,
                    image:
                      laptopImages[laptop.name] || "/laptop_brands/generic.jpg",
                  },
                }}
                key={index}
                className="block group"
              >
                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image Container */}
                    <div className="md:w-1/3">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                        <img
                          src={
                            laptopImages[laptop.name] ||
                            "/laptop_brands/generic.jpg"
                          }
                          alt={laptop.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="md:w-2/3 space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h2 className="text-2xl font-semibold text-slate-800 group-hover:text-[#0067b8] transition-colors">
                            {laptop.name}
                          </h2>
                          <span className="text-2xl font-bold text-[#0067b8]">
                            ${laptop.priceRange}
                          </span>
                        </div>
                        <p className="text-slate-600">{laptop.summary}</p>
                      </div>

                      {/* Specs Grid - Modified for consistent sizing */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg">
                        <div className="min-w-[140px] h-[40px] flex items-center gap-2">
                          <BiChip className="text-[#0067b8] text-xl flex-shrink-0" />
                          <span className="text-slate-700 truncate">
                            {laptop.specs.cpu.split(" ").slice(0)[0]}
                            <br />
                            {laptop.specs.cpu.split(" ").slice(-1)[0]}
                          </span>
                        </div>
                        <div className="min-w-[140px] h-[40px] flex items-center gap-2">
                          <BiMemoryCard className="text-[#0067b8] text-xl flex-shrink-0" />
                          <span className="text-slate-700 whitespace-nowrap">
                            {laptop.specs.ram}GB RAM
                          </span>
                        </div>
                        <div className="min-w-[140px] h-[40px] flex items-center gap-2">
                          <BiCog className="text-[#0067b8] text-xl flex-shrink-0" />
                          <span className="text-slate-700 whitespace-nowrap">
                            {laptop.specs.storage}GB
                          </span>
                        </div>
                        <div className="min-w-[140px] h-[40px] flex items-center gap-2">
                          <BiLaptop className="text-[#0067b8] text-xl flex-shrink-0" />
                          <span className="text-slate-700 whitespace-nowrap">
                            {laptop.specs.weight}
                          </span>
                        </div>
                      </div>

                      {/* Key Features and View Details - Modified for better responsive layout */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-wrap gap-2 max-w-full md:max-w-[70%]">
                          {laptop.pros.slice(0, 3).map((pro, idx) => (
                            <div
                              key={idx}
                              className="border border-[#0067b8] text-[#0067b8] px-3 py-1 rounded-full text-sm flex items-center gap-1 whitespace-nowrap"
                            >
                              <FaCheckCircle className="text-xs flex-shrink-0" />
                              <span className="truncate max-w-[200px]">
                                {pro}
                              </span>
                            </div>
                          ))}
                        </div>
                        <span className="flex items-center text-[#0067b8] font-medium group-hover:translate-x-2 transition-transform whitespace-nowrap ml-auto md:ml-0">
                          View Details <FaArrowRight className="ml-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getRandomLaptopImage(laptopName: string) {
  const laptopBrands = [
    "HP",
    "Acer",
    "Lenovo",
    "Apple",
    "Dell",
    "Asus",
    "Samsung",
    "Ultimus",
    "Primebook",
    "MSI",
    "Infinix",
    "Wings",
    "Honor",
    "Zebronics",
    "Xiaomi",
  ];

  const laptopBrandImages: { [key: string]: string } = {
    acer: "/laptop_brands/acer.jpg",
    asus: "/laptop_brands/asus.jpg",
    dell: "/laptop_brands/dell.jpg",
    hp: "/laptop_brands/hp.jpg",
    lenovo: "/laptop_brands/lenovo.jpg",
    msi: "/laptop_brands/msi.jpg",
    xiaomi: "/laptop_brands/xiaomi.webp",
    samsung: "/laptop_brands/samsung.jpg",
    infinix: "/laptop_brands/infinix.jpg",
    honor: "/laptop_brands/honor.jpg",
    ultimus: "/laptop_brands/ultimus 1.jpg",
    primebook: "/laptop_brands/primebook.jpg",
    zebronics: "/laptop_brands/zebronics.webp",
  };

  const genericImage = "/laptop_brands/generic.jpg";

  // Extract brand name from laptop name
  const brandName = laptopBrands
    .find((brand) => laptopName.toLowerCase().includes(brand.toLowerCase()))
    ?.toLowerCase();

  // Return brand-specific image or generic image
  return brandName && laptopBrandImages[brandName]
    ? laptopBrandImages[brandName]
    : genericImage;
}
