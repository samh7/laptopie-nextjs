import { Specification } from '@/lib/interfaces/interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function SpesList({filteredSpecs}: {filteredSpecs: Specification[]}) {
    const [activeInfo, setActiveInfo] = useState<number | null>(null);
  
    const toggleInfo = (index: number) => {
        setActiveInfo(activeInfo === index ? null : index);
      };
    
    return (
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
   
  )
}
