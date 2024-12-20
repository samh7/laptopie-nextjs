"use client";
import { useRef, useState } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import { deleteLaptopsLocalStore, setLaptopsLocalStore } from "@/lib/utils";
import { getRecommendations } from "@/lib/action";
import { redirect } from "next/navigation";
import InputOption from "@/components/home/InputOption";
import PopularCategories from "@/components/home/PopularCategories";
import DetailedSpecs from "@/components/home/DetailedSpecs";
import OptionsSection from "@/components/home/OptionsSection";
import { laptopCategories, specGuides } from "@/data/data";

export default function Home() {
  const [activeOption, setActiveOption] = useState("");

  const [getRecsName, setGetRecsName] = useState<string>("Get Recommendations");
  const [submitName, setSubmitName] = useState("Submit");

  const handleUserAnswer = async (data: QuizAnswers) => {
    setGetRecsName("");
    setSubmitName("");
    const res = await getRecommendations(data as QuizAnswers);
    try {
      deleteLaptopsLocalStore();
    } catch (e) {
      console.log(e);
    }
    const apiReccomendations: string = res.aai;

    setLaptopsLocalStore(apiReccomendations);

    setGetRecsName("Get Recommendations");
    setSubmitName("Submit");

    redirect("/home/recommendations");
  };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Find Your Perfect Laptop"
        description="Get personalized laptop recommendations based on your needs. Choose how you'd like to proceed:"
        imageSrc="/873966.jpg"
      />

      <div id="recommendations" className="px-10">
        <OptionsSection
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
      </div>
      <div className="mt-4 px-10">
        <InputOption
          activeOption={activeOption}
          getRecsName={setGetRecsName}
          handleUserAnswer={handleUserAnswer}
          submitName={submitName}
          setSubmitName={setSubmitName}
        />
      </div>

      {/* <LaptopHistory/> */}
      {/* <div className="flex flex-col gap-4 justify-center items-center"> */}
      <PopularCategories items={laptopCategories} />
      <PopularCategories items={specGuides} />
      {/* </div> */}
      {/* <SpecGuide /> */}
      <DetailedSpecs />
    </div>
  );
}
