import { FaInfoCircle } from "react-icons/fa";
import { Laptop, LaptopSpecs } from "@/lib/interfaces/interfaces";

export default function DetailedSpecs({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-16">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <FaInfoCircle className="text-[#0067b8]" />
        Technical Specifications
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {Object.entries((reccomendedLaptop?.specs as LaptopSpecs) || {}).map(
          ([key, value]) => (
            <div key={key} className="flex items-center py-3 border-b">
              <span className="text-gray-600 w-1/3 capitalize">{key}</span>
              <span className="font-medium">
                {typeof value === "number"
                  ? `${value} ${
                      key === "ram" || key === "storage" ? "GB" : "Wh"
                    }`
                  : String(value)}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
