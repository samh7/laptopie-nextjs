import { OptionCard } from "./OptionCard";
import { BiCheckCircle } from "react-icons/bi";

interface OptionsSectionsProps {
  activeOption: string;
  setActiveOption: (option: string) => void;
}

export default function OptionsSection({
  activeOption,
  setActiveOption,
}: OptionsSectionsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-8">
      <div className="flex flex-wrap justify-center gap-6">
        <OptionCard
          isSelected={activeOption === "quiz"}
          onClick={() => setActiveOption("quiz")}
          icon={<BiCheckCircle className="text-2xl text-[#0067b8]" />}
          title="Answer Questions"
          description="Get recommendations by answering a few simple questions about your needs, budget, and preferences."
          tags={["5-10 minutes", "Structured", "Detailed results"]}
        />

        <OptionCard
          isSelected={activeOption === "describe"}
          onClick={() => setActiveOption("describe")}
          icon={<BiCheckCircle className="text-2xl text-[#0067b8]" />}
          title="Describe Your Needs"
          description="Tell us in your own words what you're looking for in a laptop. Our AI will analyze your description."
          tags={["2-3 minutes", "Free form", "Natural language"]}
        />
      </div>
    </div>
  );
}
