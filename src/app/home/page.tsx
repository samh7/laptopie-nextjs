"use client";
import { useRef, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { HeroSection } from "@/components/home/HeroSection";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import { deleteLaptopsLocalStore, setLaptopsLocalStore } from "@/lib/utils";
import { getRecommendations } from "@/lib/action";
import { redirect } from "next/navigation";
import InputOption from "@/components/home/InputOption";
import PopularCategories from "@/components/home/PopularCategories";
import SpecGuide from "@/components/home/SpecGuide";
import DetailedSpecs from "@/components/home/DetailedSpecs";
import OptionsSection from "@/components/home/OptionsSection";

export default function Home() {
  const [activeOption, setActiveOption] = useState("");

  const [getRecsName, setGetRecsName] = useState<string>("Get Recommendations");
  const [submitName, setSubmitName] = useState<string | JSX.Element>("Submit");

  const handleUserAnswer = async (data: QuizAnswers) => {
    setGetRecsName("");
    const res = await getRecommendations(data as QuizAnswers);
    try {
      deleteLaptopsLocalStore();
    } catch (e) {
      console.log(e);
    }
    const apiReccomendations: string = res.aai;

    setLaptopsLocalStore(apiReccomendations);

    setGetRecsName("Get Recommendations");

    redirect("/home/recommendations");
  };
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const describe = async () => {
    setSubmitName(<BiLoaderCircle className="text-xl animate-spin" />);
    const data = textAreaRef.current?.value;
    const res = await getRecommendations(data as string);
    const recommendations = res.aai;
    console.log(res.aai);
    setLaptopsLocalStore(recommendations);
    setSubmitName("Submit");
    redirect("/home/recommendations");
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Find Your Perfect Laptop"
        description="Get personalized laptop recommendations based on your needs. Choose how you'd like to proceed:"
        imageSrc="/873966.jpg"
      />

      <OptionsSection
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <div className="mt-4">
        <InputOption
          describe={describe}
          submitName={submitName}
          activeOption={activeOption}
          getRecsName={setGetRecsName}
          handleUserAnswer={handleUserAnswer}
        />
      </div>

      {/* <LaptopHistory/> */}
      <PopularCategories />
      <SpecGuide />
      <DetailedSpecs />
    </div>
  );
}
