"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import QuizComponent from "./QuizComponet";
import { useMyStore } from "../stores/MyStore";

function HomePage() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [userAnswers, setUserAnswers] = useState({});

  const [showInfo, setShowInfo] = useState(false);

  const { userInfo, setUserInfo } = useMyStore();

  const handleQuizCompletion = (answers) => {
    setUserAnswers(answers);
    setQuizCompleted(true);
  };
  const renderContent = () => {
    if (quizCompleted) {
      console.log("userAnswers", userAnswers);
      // redirect("/recommendations", { userAnswers });
    } else {
      return (
        <div className="mb-12">
          <QuizComponent
            onQuizComplete={handleQuizCompletion}
            initialAnswers={userAnswers}
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen  text-gray-900 p-4 sm:p-8">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {renderContent()}
        <div className="text-center mt-12">
          <button className="inline-flex items-center font-semibold text-lg group transition-all duration-300 ease-in-out">
            Explore PC Specifications
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
