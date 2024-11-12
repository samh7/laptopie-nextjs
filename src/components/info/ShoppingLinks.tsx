import { FaShoppingCart } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";

export default function ShoppingLinks({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Purchase Options</h3>
          <span className="text-sm text-slate-500">
            Best prices from trusted retailers
          </span>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {reccomendedLaptop?.shoppingLinks?.map(
          (link: string, index: number) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 hover:bg-slate-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#0067b8]/5 rounded-lg flex items-center justify-center group-hover:bg-[#0067b8]/10 transition-colors">
                    <FaShoppingCart className="text-[#0067b8] text-xl" />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-slate-900 mb-1">
                      Retailer {index + 1}
                    </div>
                    <div className="text-sm text-slate-500">
                      {link.includes("amazon")
                        ? "Amazon.com"
                        : link.includes("smartprix")
                        ? "Smartprix.com"
                        : "Official Store"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                    In Stock
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-[#0067b8] group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </div>
            </a>
          )
        ) || []}
      </div>

      <div className="bg-slate-50 p-4 text-center text-sm text-slate-500">
        Prices and availability may vary by region
      </div>
    </div>
  );
}
