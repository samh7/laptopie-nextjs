import { faqs } from "@/data/data";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
