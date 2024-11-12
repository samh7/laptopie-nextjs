import { ReactNode } from 'react';

interface SpecGuideCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}

export function SpecGuideCard({ icon, title, description, items }: SpecGuideCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg 
      transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full 
        -translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0067b8] to-[#2b5797] 
          flex items-center justify-center mb-6 text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg
              hover:bg-slate-100 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#0067b8]"></div>
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 