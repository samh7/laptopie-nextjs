import { FaArrowRight, FaCheckCircle, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { BiChip, BiCog, BiLaptop, BiMemoryCard } from "react-icons/bi";
import { Laptop } from "@/lib/interfaces/interfaces";

export default function Results({
  reccomendations,
  laptopImages,
}: {
  reccomendations: Laptop[];
  laptopImages: { [key: string]: string };
}) {
  return (
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

        {/* Laptop Recommendations List*/}
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
                  {/* Laptop Image  */}
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

                  {/* Name and Price */}
                  <div className="md:w-2/3 space-y-6">
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

                    {/* Specs Grid */}
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

                    {/* Pros and Cons */}
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
  );
}
