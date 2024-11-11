"use client";
import { useState } from "react";
import { BiCheckCircle, BiPencil } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { HeroSection } from "./components/HeroSection";
import { OptionCard } from "./components/OptionCard";
import { CategoryCard } from "./components/CategoryCard";
import { SpecGuideCard } from "./components/SpecGuideCard";
import { laptopCategories, specGuides } from "./data";
// import QuizComponent from '@/components/QuizComponent';
import QuizComponet from "../../components/QuizComponet";
import { QuizAnswers } from "@/interfaces/interfaces";
import { useMyStore } from "@/stores/MyStore";
import { deleteLaptopsLocalStore, setLaptopsLocalStore } from "@/lib/utils";
import { getRecommendations } from "@/lib/action";
import { redirect } from "next/navigation";
// Add these types and interfaces near the top of the file
// import router, {  } from 'next/router'

export default function Home() {
  const [activeOption, setActiveOption] = useState("");
  const { reccomendations, setRecommendations } = useMyStore();

  const [getRecsName, setGetRecsName] = useState<string>("Get Recommendations");

  const handleUserAnswer = async (data: QuizAnswers) => {
    setGetRecsName("");
    const res = await getRecommendations(data as QuizAnswers);
    deleteLaptopsLocalStore();
    const apiReccomendations: string = res.aai;

    setLaptopsLocalStore(apiReccomendations);

    // console.log(apiReccomendations);

    // const list: Laptop[] = JSON.parse(res.data);
    // setRecommendations(apiReccomendations);

    setGetRecsName("Get Recommendations");
    // router.push('/home/recommendations', undefined, { shallow: true })
    redirect("/home/recommendations");
  };

  const localStorageChecker = () => {
    deleteLaptopsLocalStore();
  };
  const renderContent = () => {
    switch (activeOption) {
      case "image":
        return (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="border-2 border-dashed border-[#0067b8]/20 rounded-lg p-8 text-center">
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    // Handle image upload here
                  }}
                />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <FaSearch className="text-2xl text-[#0067b8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Upload Your Image
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Click to upload an image or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </label>
            </div>
          </div>
        );
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
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0067b8] focus:border-[#0067b8] transition-all duration-200"
              placeholder="Tell us about your ideal laptop. Consider mentioning your intended use, preferred features, and any specific requirements..."
              maxLength={350}
              rows={6}
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <p className="text-sm text-gray-500">Maximum 350 characters</p>
              <button className="px-6 py-2 bg-[#0067b8] text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] ">
      {/* remove for testing only */}
      <button
        onClick={localStorageChecker}
        className="bg-red-600 hover:bg-red-500 w-[200px] h-[60px] rounded-full text-white border-[2px] mt-[20px] fixed border-black"
      >
        CHECK LOCL STORAGE
      </button>

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

          <OptionCard
            isSelected={activeOption === "image"}
            onClick={() => setActiveOption("image")}
            icon={<FaSearch className="text-2xl text-[#0067b8]" />}
            title="Search by Image"
            description="Upload a photo of a laptop you like, and we'll find similar options that match your style."
            tags={["Visual search", "AI-powered", "Quick results"]}
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

const itemsString = `recommendations": [
    {
      "name": "Acer Swift 3 SF314-511",
      "imageUrl": "",
      "priceRange": 700,
      "specs": {
        "cpu": "Intel Core i5-1135G7",
        "gpu": "Intel Iris Xe Graphics",
        "ram": 8,
        "storage": 512,
        "display": "14.0 inches, 1920 x 1080 pixels",
        "battery": 10,
        "weight": "1.2 kg"
      },
      "pros": [
        "Lightweight and portable",
        "Good battery life",
        "Decent performance for everyday tasks"
      ],
      "cons": [
        "Average display quality",
        "Limited upgrade options"
      ],
      "shoppingLinks": [
        "https://www.amazon.com/s?k=Acer+Swift+3+SF314-511",
        "https://www.smartprix.com/products/?q=Acer+Swift+3+SF314-511"
      ],
      "summary": "The Acer Swift 3 SF314-511 is a great option for those who need a lightweight and portable laptop for basic tasks. It has a good battery life and decent performance, but the display quality is average and there are limited upgrade options."
    },
    {
      "name": "Lenovo IdeaPad Flex 5",
      "imageUrl": "",
      "priceRange": 800,
      "specs": {
        "cpu": "AMD Ryzen 5 5500U",
        "gpu": "AMD Radeon Graphics",
        "ram": 8,
        "storage": 512,
        "display": "14.0 inches, 1920 x 1080 pixels",
        "battery": 8,
        "weight": "1.5 kg"
      },
      "pros": [
        "Convertible design, can be used as a tablet",
        "Good performance for work and school tasks",
        "Decent battery life"
      ],
      "cons": [
        "Can be a bit heavy for constant travel",
        "Touchscreen can be unresponsive at times"
      ],
      "shoppingLinks": [
        "https://www.amazon.com/s?k=Lenovo+IdeaPad+Flex+5",
        "https://www.smartprix.com/products/?q=Lenovo+IdeaPad+Flex+5"
      ],
      "summary": "The Lenovo IdeaPad Flex 5 is a good choice for those who need a versatile laptop that can be used for work, school, and entertainment. It has a convertible design, good performance, and decent battery life, but it can be a bit heavy and the touchscreen can be unresponsive at times."
    },
    {
      "name": "HP Envy x360 13",
      "imageUrl": "",
      "priceRange": 900,
      "specs": {
        "cpu": "Intel Core i7-1165G7",
        "gpu": "Intel Iris Xe Graphics",
        "ram": 16,
        "storage": 512,
        "display": "13.3 inches, 1920 x 1080 pixels",
        "battery": 10,
        "weight": "1.3 kg"
      },
      "pros": [
        "Premium design and build quality",
        "Excellent display quality",
        "Good performance for demanding tasks"
      ],
      "cons": [
        "Higher price point",
        "Limited storage upgrade options"
      ],
      "shoppingLinks": [
        "https://www.amazon.com/s?k=HP+Envy+x360+13",
        "https://www.smartprix.com/products/?q=HP+Envy+x360+13"
      ],
      "summary": "The HP Envy x360 13 is a high-end laptop with a premium design, excellent display quality, and good performance. However, it comes at a higher price point and has limited storage upgrade options."
    },
    {
      "name": "Dell XPS 13 9315",
      "imageUrl": "",
      "priceRange": 1200,
      "specs": {
        "cpu": "Intel Core i7-1195G7",
        "gpu": "Intel Iris Xe Graphics",
        "ram": 16,
        "storage": 512,
        "display": "13.4 inches, 1920 x 1200 pixels",
        "battery": 10,
        "weight": "1.2 kg"
      },
      "pros": [
        "Stunning display quality",
        "Excellent performance for demanding tasks",
        "Great battery life"
      ],
      "cons": [
        "Expensive",
        "Limited upgrade options"
      ],
      "shoppingLinks": [
        "https://www.amazon.com/s?k=Dell+XPS+13+9315",
        "https://www.smartprix.com/products/?q=Dell+XPS+13+9315"
      ],
      "summary": "The Dell XPS 13 9315 is a high-end laptop with a stunning display, excellent performance, and great battery life. However, it is expensive and has limited upgrade options."
    },
    {
      "name": "ASUS ZenBook 13 UX325",
      "imageUrl": "",
      "priceRange": 800,
      "specs": {
        "cpu": "Intel Core i7-1165G7",
        "gpu": "Intel Iris Xe Graphics",
        "ram": 8,
        "storage": 512,
        "display": "13.3 inches, 1920 x 1080 pixels",
        "battery": 10,
        "weight": "1.1 kg"
      },
      "pros": [
        "Lightweight and portable",
        "Good performance for everyday tasks",
        "Long battery life"
      ],
      "cons": [
        "Average display quality",
        "Limited upgrade options"
      ],
      "shoppingLinks": [
        "https://www.amazon.com/s?k=ASUS+ZenBook+13+UX325",
        "https://www.smartprix.com/products/?q=ASUS+ZenBook+13+UX325"
      ],
      "summary": "The ASUS ZenBook 13 UX325 is a good choice for those who need a lightweight and portable laptop for basic tasks. It has good performance, long battery life, but the display quality is average and there are limited upgrade options."
    }
  ]
}`;
