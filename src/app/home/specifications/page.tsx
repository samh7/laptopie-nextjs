"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { specifications } from "../data";

interface Specification {
  title: string;
  description: string;
  detailedExplanation: string;
  recommendation: string;
  externalLinks: {
    text: string;
    url: string;
  }[];
  category: string;
  cheatsheet?: {
    prefix: string;
    meaning: string;
  }[];
}

export default function Specifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeInfo, setActiveInfo] = useState<number | null>(null);
  const [filteredSpecs, setFilteredSpecs] = useState<Specification[]>(specifications);

  const toggleInfo = (index: number) => {
    setActiveInfo(activeInfo === index ? null : index);
  };

  useEffect(() => {
    const filtered = specifications.filter(
      (spec) =>
        spec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spec.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSpecs(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0067b8] to-[#2b5797] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Laptop Specifications Guide
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mb-8">
                Understand the technical details that matter. Make informed decisions
                about your next laptop purchase.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <img
                src="/873966.jpg"
                alt="Laptop Components"
                className="w-full rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Specifications Content */}
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

        <div className="space-y-8">
          {filteredSpecs.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {spec.title}
                </h3>
                <button
                  type="button"
                  className="ml-2 text-[#0067b8] hover:text-[#005499] focus:outline-none transition-colors duration-300"
                  onClick={() => toggleInfo(index)}
                >
                  <IoIosArrowDown
                    className={`w-5 h-5 transform transition-transform duration-300 
                      ${activeInfo === index ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              <p className="text-slate-600 mb-2">{spec.description}</p>
              <AnimatePresence>
                {activeInfo === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="text-slate-800 mb-4">
                        {spec.detailedExplanation}
                      </p>
                      <div className="bg-white border-l-4 border-[#0067b8] p-4 mb-4 rounded">
                        <p className="font-semibold mb-2">Recommendation:</p>
                        <p className="text-slate-800">{spec.recommendation}</p>
                      </div>
                      <h4 className="font-semibold mb-2">Learn More:</h4>
                      <ul className="space-y-2">
                        {spec.externalLinks.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0067b8] hover:text-[#005499] hover:underline flex items-center"
                            >
                              {link.text}
                              <FaExternalLinkAlt className="ml-2 text-sm" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
