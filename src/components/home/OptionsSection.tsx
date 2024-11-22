"use client";
import { motion } from "framer-motion";
import { MessageSquare, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionsSectionProps {
  activeOption: any | null;
  setActiveOption: any | null;
}

export default function OptionsSection({
  activeOption,
  setActiveOption,
}: OptionsSectionProps) {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl font-semibold">Choose Your Path</h2>
            <p className="text-muted-foreground max-w-2xl">
              Get personalized laptop recommendations by either answering a few
              questions or describing your ideal laptop
            </p>
          </motion.div>

          {/* Options Grid */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
            {/* Quiz Option */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                className={cn(
                  "max-w-full  w-[400px] h-[250px] bg-gray-100 rounded-sm  p-6 flex flex-col items-center gap-4 hover:bg-blue-50 hover:border-blue-200 transition-all",
                  activeOption === "quiz" && "bg-blue-50  "
                )}
                onClick={() => setActiveOption("quiz")}
              >
                <ListChecks className="h-12 w-12 text-blue-500" />
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold text-xl">Answer Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    Get recommendations by answering a few simple questions
                  </p>
                  <p className="text-muted-foreground text-sm">
                    about your needs
                  </p>
                </div>
              </button>
            </motion.div>

            {/* Describe Option */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                className={cn(
                  "max-w-full w-[400px] h-[250px] p-6 flex flex-col items-center gap-4 bg-gray-100 rounded-sm hover:bg-purple-50 hover:border-purple-200 transition-all",
                  activeOption === "describe" &&
                    "bg-purple-50 border-purple-200"
                )}
                onClick={() => setActiveOption("describe")}
              >
                <MessageSquare className="h-12 w-12 text-purple-500" />
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold text-xl">Describe Your Needs</h3>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your ideal laptop
                  </p>
                  <p className="text-muted-foreground text-sm">
                    in your own words
                  </p>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
