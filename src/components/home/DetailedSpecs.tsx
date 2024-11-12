import Link from "next/link";

export default function DetailedSpecs() {
  return (
    <div className="text-center mt-24 mb-16">
      <Link
        href="/home/specifications"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0067b8] 
        text-[#0067b8] rounded-full hover:bg-[#0067b8] hover:text-white transition-all duration-300
        font-semibold text-lg"
      >
        View Detailed Specifications
      </Link>
    </div>
  );
}
