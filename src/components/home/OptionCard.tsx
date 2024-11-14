"use client";
import { ReactNode } from 'react';

interface OptionCardProps {
  isSelected: boolean;
  onClick: () => void;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export function OptionCard({ isSelected, onClick, icon, title, description, tags }: OptionCardProps) {
  return (
    <div
      className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all flex-1 min-w-[300px] max-w-[400px]
        ${isSelected ? "border-[#0067b8]" : "border-slate-200 hover:border-slate-300"}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#0067b8]/5 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 