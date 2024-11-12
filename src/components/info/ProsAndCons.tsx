import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";

export default function ProsAndCons({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl mb-16">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-[#107c10] flex items-center gap-2">
            <FaCheckCircle />
            Advantages
          </h3>
          <ul className="space-y-3">
            {reccomendedLaptop?.pros?.map((pro: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#107c10]" />
                {pro}
              </li>
            )) || []}
          </ul>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-[#d83b01] flex items-center gap-2">
            <FaTimesCircle />
            Limitations
          </h3>
          <ul className="space-y-3">
            {reccomendedLaptop?.cons?.map((con: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#d83b01]" />
                {con}
              </li>
            )) || []}
          </ul>
        </div>
      </div>
    </div>
  );
}
