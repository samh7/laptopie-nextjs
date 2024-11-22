// "use client";
import QuizComponet from "./QuizComponet.jsx";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import DescribeSection from "./DescribeSection";

interface InputOptionProps {
  activeOption: string;
  getRecsName: (name: string) => void;

  handleUserAnswer: (data: QuizAnswers) => void;
  submitName: string;
  setSubmitName: (name: string) => void;
}

export default function InputOption({
  activeOption,
  getRecsName,
  handleUserAnswer,
  submitName,
  setSubmitName,
}: InputOptionProps) {
  switch (activeOption) {
    case "quiz":
      return (
        <div className="bg-white rounded-xl shadow-sm p-8  border-gray-100">
          <QuizComponet
            // getRecsName={getRecsName}
            onQuizComplete={(data: QuizAnswers) => {
              handleUserAnswer(data);
            }}
            submitName={submitName}
          />
        </div>
      );
    case "describe":
      return <DescribeSection />;
    default:
      return (
        <div className="bg-white rounded-xl shadow-sm p-8  border-gray-100">
          <QuizComponet
            // getRecsName={getRecsName}
            onQuizComplete={(data: QuizAnswers) => {
              handleUserAnswer(data);
            }}
            submitName={submitName}
          />
        </div>
      );
  }
}
