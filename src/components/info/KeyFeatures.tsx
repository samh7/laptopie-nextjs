import { BiChip, BiExpandAlt } from "react-icons/bi";
import { FaBatteryFull } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";

export default function KeyFeatures({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Key Features Cards - Microsoft Style */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <BiExpandAlt className="text-[#0067b8] text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Portable Design</h3>
          <p className="text-gray-600">
            At just {reccomendedLaptop?.specs.weight}, perfect for on-the-go
            productivity
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <BiChip className="text-[#0067b8] text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Powerful Performance</h3>
          <p className="text-gray-600">
            {reccomendedLaptop?.specs.cpu} with {reccomendedLaptop?.specs.ram}
            GB RAM
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <FaBatteryFull className="text-[#0067b8] text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">All-Day Battery</h3>
          <p className="text-gray-600">
            {reccomendedLaptop?.specs.battery} hours of usage
          </p>
        </div>
      </div>
    </div>
  );
}
