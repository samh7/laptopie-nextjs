import { useRef } from "react";
import QuizComponet from "./QuizComponet";
import { QuizAnswers } from "@/lib/interfaces/interfaces";
import { BiPencil } from "react-icons/bi";

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
}
