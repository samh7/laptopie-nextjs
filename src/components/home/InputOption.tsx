import { useRef } from "react";
import QuizComponet from "./QuizComponet.jsx";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import DescribeSection from "./DescribeSection";

interface InputOptionProps {
  activeOption: string;
  getRecsName: (name: string) => void;
  handleUserAnswer: (data: QuizAnswers) => void;
  describe: () => void;
  submitName: string | any;
}

export default function InputOption({
  activeOption,
  getRecsName,
  handleUserAnswer,
  describe,
  submitName,
}: InputOptionProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
        <DescribeSection
          describe={describe}
          submitName={submitName}
          textAreaRef={textAreaRef}
        />
      );
    default:
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
  }
}
