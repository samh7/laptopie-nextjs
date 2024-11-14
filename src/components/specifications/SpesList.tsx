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
    
    if (filteredSpecs.length === 0) {
        return (
            <div className="w-full max-w-4xl mx-auto text-center py-12 min-h-[70vh] flex flex-col items-center justify-start">
                <h3 className="text-lg font-semibold text-muted-foreground">
                    No specifications found
                </h3>
                <p className="text-base text-muted-foreground mt-2">
                    Try adjusting your search terms or filters
                </p>
            </div>
        );
    }
    
    return (
        <div className="w-full  max-w-6xl mx-auto space-y-3 min-h-[70vh]">
            {filteredSpecs.map((spec, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div 
                  className="flex flex-col"
                  onClick={() => toggleInfo(index)}
                >
                  <div className="px-6 py-4 flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-semibold">
                      {spec.title}
                    </h3>
                    <IoIosArrowDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 
                          ${activeInfo === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div className="px-6 pb-4">
                    <p className="text-base text-muted-foreground">{spec.description}</p>
                  </div>
                  <AnimatePresence>
                    {activeInfo === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="text-base text-muted-foreground mb-6">
                            {spec.detailedExplanation}
                          </div>
                          <div className="bg-muted rounded-md p-6 mb-6">
                            <div className="font-semibold text-base mb-2">Recommendation</div>
                            <div className="text-base text-muted-foreground">{spec.recommendation}</div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-base font-semibold">Learn More</h4>
                            <ul className="space-y-3">
                              {spec.externalLinks.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base text-muted-foreground hover:text-primary inline-flex items-center"
                                  >
                                    {link.text}
                                    <FaExternalLinkAlt className="ml-2 h-3.5 w-3.5" />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
    )
}
