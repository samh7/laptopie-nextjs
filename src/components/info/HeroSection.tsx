import { Laptop } from "@/lib/interfaces/interfaces";
import { FaPrint } from "react-icons/fa";

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
    <div className="bg-[#0067b8] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight">
              {reccomendedLaptop?.name}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {reccomendedLaptop?.summary}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                ${reccomendedLaptop?.priceRange}
              </span>
              <button
                onClick={handlePrint}
                className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-md transition-colors flex items-center gap-2"
              >
                <FaPrint /> Print Specs
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={image}
              alt={reccomendedLaptop?.name}
              className="w-full rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
