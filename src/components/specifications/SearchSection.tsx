import { FaSearch } from "react-icons/fa";

export default function SearchSection({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search specifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-full 
            focus:outline-none focus:ring-2 focus:ring-[#0067b8] focus:border-[#0067b8] 
            text-gray-900 placeholder-gray-500 text-lg"
          />
          <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#0067b8] text-xl" />
        </div>
      </div>
    </div>
  );
}
