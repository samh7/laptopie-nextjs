"use client";
import { faqs } from "@/data/data";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container flex flex-col items-start px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-start mb-12">
          Frequently Asked Questions
        </h2>
        <div className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg w-full"
            >
              <button
                className={cn(
                  "flex flex-1 items-center justify-between w-full py-4 px-5 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  "text-foreground"
                )}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-sm font-medium leading-none">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    openFAQ === index && "rotate-180"
                  )}
                />
              </button>
              {openFAQ === index && (
                <div className="px-5 pb-4 pt-0">
                  <div className="text-sm text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
