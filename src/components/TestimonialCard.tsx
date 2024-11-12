interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="text-center">
      <div className="text-[#0067b8] text-6xl mb-4">"</div>
      <p className="text-slate-600 mb-4">{quote}</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  );
} 