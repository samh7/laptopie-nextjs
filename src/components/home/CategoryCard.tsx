import { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  specs: string;
}

export function CategoryCard({
  icon,
  title,
  description,
  specs,
}: CategoryCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#0067b8] 
      hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0067b8] to-[#2b5797] 
        flex items-center justify-center mb-4 text-white"
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="pt-4 border-t border-slate-100">
        <div className="text-sm text-[#0067b8] font-medium">{specs}</div>
      </div>
    </div>
  );
}
