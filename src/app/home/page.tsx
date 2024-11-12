"use client";
import { useRef, useState } from "react";
import { BiCheckCircle, BiLoaderCircle, BiPencil } from "react-icons/bi";
import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { OptionCard } from "@/components/home/OptionCard";
import { CategoryCard } from "@/components/home/CategoryCard";
import { laptopCategories, specGuides } from "../../data/data";
import QuizComponet from "../../components/home/QuizComponet";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import { deleteLaptopsLocalStore, setLaptopsLocalStore } from "@/lib/utils";
import { getRecommendations, getRecommendationsImage } from "@/lib/action";
import { redirect } from "next/navigation";
import { SpecGuideCard } from "@/components/home/SpecGuideCard";

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
    // try {
    // Get recommendations and remove previous ones
    const res = await getRecommendations(data as string);
    const recommendations = res.aai; // Ensure proper JSON string
    console.log(res.aai);
    // try {
    //   deleteLaptopsLocalStore();
    // } catch (e) {
    //   console.log(e);
    // }
    // Save new recommendations to local storage
    setLaptopsLocalStore(recommendations);

    setSubmitName("Submit");

    redirect("/home/recommendations");

    // Redirect to recommendations page
    // redirect("/home/recommendations");
    // } catch (error) {
    //   console.error("Error processing recommendations:", error);
    //   setSubmitName("Submit");
    // }
  };

  const imageUpload = async () => {
    const file = imageInputRef.current?.files?.[0];
    if (!file) return;
    setSubmitName(<BiLoaderCircle className="text-xl animate-spin" />);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await getRecommendationsImage(formData); // Pass formData here
      const laptopRecommendations = res.aai;
      console.log(laptopRecommendations);
      setLaptopsLocalStore(laptopRecommendations);
      setSubmitName("Submit");
      redirect("/home/recommendations");
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  const [imagePreview, setImagePreview] = useState<ArrayBuffer | string | null>(
    null
  );

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageInputRef = useRef<HTMLInputElement>(null);
  const renderContent = () => {
    switch (activeOption) {
      case "quiz":
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <QuizComponet
              getRecsName={getRecsName}
              onQuizComplete={(data: QuizAnswers) => {
                handleUserAnswer(data);
              }}
            />
          </div>
        );
      case "describe":
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <BiPencil className="text-xl text-[#0067b8]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Describe Your Needs
              </h3>
            </div>
            <textarea
              ref={textAreaRef}
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0067b8] focus:border-[#0067b8] transition-all duration-200"
              placeholder="Tell us about your ideal laptop. Consider mentioning your intended use, preferred features, and any specific requirements..."
              maxLength={350}
              rows={6}
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-gray-500">Maximum 350 characters</p>
              <button
                onClick={() => {
                  describe();
                }}
                className="px-6 w-[100px] flex justify-center items-center py-2 bg-[#0067b8] text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                {submitName}
              </button>
            </div>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] ">
      {/* remove for testing only
      <button
        onClick={localStorageChecker}
        className="bg-red-600 hover:bg-red-500 w-[200px] h-[60px] rounded-full text-white border-[2px] mt-[20px] fixed border-black"
      >
        CHECK LOCL STORAGE
      </button> */}

      <HeroSection
        title="Find Your Perfect Laptop"
        description="Get personalized laptop recommendations based on your needs. Choose how you'd like to proceed:"
        imageSrc="/873966.jpg"
      />

      {/* Options Section */}
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

        {/* Interactive Content Section */}
        <div className="mt-8 mb-16">{renderContent()}</div>

        {/* Popular Categories Section */}
        <section className="mt-24 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Popular Laptop Categories
            </h2>
            <p className="text-slate-600">
              Explore our curated selection of laptops designed for specific
              needs and use cases
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {laptopCategories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                specs={category.specs}
              />
            ))}
          </div>
        </section>

        {/* Specification Guide Section */}
        <section className="mt-32 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Understanding Specifications
            </h2>
            <p className="text-slate-600">
              Make informed decisions by understanding the key components that
              power your laptop
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specGuides.map((guide, index) => (
              <SpecGuideCard
                key={index}
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
                items={guide.items}
              />
            ))}
          </div>
        </section>

        {/* Link to Detailed Specifications */}
        <div className="text-center mt-24 mb-16">
          <Link
            href="/home/specifications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0067b8] 
              text-[#0067b8] rounded-full hover:bg-[#0067b8] hover:text-white transition-all duration-300
              font-semibold text-lg"
          >
            View Detailed Specifications
          </Link>
        </div>
      </div>
    </div>
  );
}
