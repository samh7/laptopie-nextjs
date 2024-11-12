import { specsList } from "@/data/data";
import { Laptop } from "@/lib/interfaces/interfaces";
import { FaRegStar } from "react-icons/fa";

export default function HeroSection({
  reccomendations,
}: {
  reccomendations: Laptop[];
}) {
  return (
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

        {/* Price Range$ & Description */}

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-medium mb-6">Investment Range</h3>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-3xl font-bold">
                    ${Math.min(...reccomendations.map((l) => l.priceRange))}
                  </span>
                  <span className="text-3xl font-bold">
                    ${Math.max(...reccomendations.map((l) => l.priceRange))}
                  </span>
                </div>

                <div className="relative mt-4">
                  <div className="h-1.5 bg-white/20 rounded-full">
                    <div className="absolute inset-0 bg-blue-400/50 rounded-full"></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="text-sm text-blue-200">Entry Level</span>
                  <span className="text-sm text-blue-200">Premium</span>
                </div>
              </div>

              <p className="text-sm text-blue-100 border-t border-white/10 pt-4">
                Range includes options balancing performance with value. Higher
                prices typically indicate premium features and better
                performance.
              </p>
            </div>
          </div>

          {/* Laptop  Specs */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specsList.map((item, index) => (
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
                  requirements for performance, budget, and features. The first
                  recommendations will most closely align with your needs, while
                  later options may offer alternative trade-offs or premium
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
