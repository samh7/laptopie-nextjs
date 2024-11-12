import { useState } from "react";
import {
  BiLaptop,
  BiWorld,
  BiGame,
  BiMovie,
  BiPencil,
  BiGroup,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiDesktop,
  BiCloud,
  BiMobile,
  BiLock,
  BiFullscreen,
  BiWindowAlt,
  BiLoaderCircle,
} from "react-icons/bi";

const questions = [
  {
    id: "usage",
    question: "What will you use your PC for most? (Choose up to 2)",
    options: [
      {
        title: "Just the basics",
        description:
          "Browsing the internet, checking email, and light document editing.",
      },
      {
        title: "Entertainment",
        description: "Streaming movies, listening to music, and casual gaming.",
      },
      {
        title: "Gaming",
        description:
          "Playing a variety of games, from casual to more demanding titles.",
      },
      {
        title: "Work or school",
        description:
          "Productivity tasks, video conferencing, and document creation.",
      },
      {
        title: "Creating",
        description: "Photo editing, video production, or digital art.",
      },
      {
        title: "Family",
        description:
          "Shared use for various activities by multiple family members.",
      },
    ],
    maxSelections: 2,
  },
  {
    id: "workload",
    question: "How would you describe your workload?",
    options: [
      { title: "Light", description: "Basic tasks and light multitasking." },
      {
        title: "Heavy",
        description: "Intensive multitasking and demanding applications.",
      },
    ],
    maxSelections: 1,
  },
  {
    id: "browsing",
    question: "How would you describe your web browsing?",
    options: [
      {
        title: "Light",
        description: "A few tabs open at a time, mostly simple websites.",
      },
      {
        title: "Heavy",
        description:
          "Many tabs open simultaneously, often with complex web applications.",
      },
    ],
    maxSelections: 1,
    showIf: (answers) =>
      answers.usage.some((a) =>
        ["Work or school", "Just the basics"].includes(a.title)
      ),
  },
  {
    id: "editing",
    question: "How would you describe your photo or video editing skills?",
    options: [
      { title: "Beginner", description: "Basic editing and touch-ups." },
      {
        title: "Intermediate to advanced",
        description: "Complex editing, multiple layers, and effects.",
      },
    ],
    maxSelections: 1,
    showIf: (answers) => answers.usage.some((a) => a.title === "Creating"),
  },
  {
    id: "gaming",
    question: "How would you describe the types of games you play?",
    options: [
      {
        title: "Simple and basic",
        description: "Casual games, 2D games, or older titles.",
      },
      {
        title: "Complex and realistic",
        description: "Modern 3D games with high-end graphics.",
      },
    ],
    maxSelections: 1,
    showIf: (answers) => answers.usage.some((a) => a.title === "Gaming"),
  },
  {
    id: "mobility",
    question: "Where do you plan to use your PC?",
    options: [
      {
        title: "Always at my desk",
        description:
          "I want to set up and use my PC in a single place like my home or office.",
      },
      {
        title: "At home, but I move around",
        description:
          "I mostly want to use my PC at home, but I also want to be able to take it to a café or library.",
      },
      {
        title: "Anywhere with a wireless connection",
        description: "My PC needs to be as mobile as I am.",
      },
    ],
    maxSelections: 1,
  },
  {
    id: "priority",
    question: "What's most important to you when looking for a PC?",
    options: [
      {
        title: "Larger screen size",
        description: "I want a larger screen for better clarity and visuals.",
      },
      {
        title: "Interactive screen",
        description:
          "I'm looking for a PC that has a touchscreen or is compatible with a digital pen.",
      },
      {
        title: "Portability",
        description:
          "I'm looking for a lightweight and compact PC that I can take anywhere.",
      },
      {
        title: "Performance",
        description:
          "I want a PC designed for speed, performance, and multitasking.",
      },
      {
        title: "Security",
        description:
          "I'm looking for a PC that lets me log in securely with just a glance using my face or a fingerprint scan.",
      },
      {
        title: "I'm not sure yet",
        description: "I'm not sure what's most important to me at the moment.",
      },
    ],
    maxSelections: 1,
  },
  {
    id: "storage",
    question: "Where do you primarily store your digital files?",
    options: [
      {
        title: "In the cloud",
        description:
          "I store most of my files on a cloud-based platform like OneDrive.",
      },
      {
        title: "On my PC",
        description: "I prefer to store my files locally for easy access.",
      },
    ],
    maxSelections: 1,
  },
];

const getOptionIcon = (optionTitle) => {
  const iconMap = {
    // Usage icons
    "Just the basics": <BiWorld className="text-xl" />,
    Entertainment: <BiMovie className="text-xl" />,
    Gaming: <BiGame className="text-xl" />,
    "Work or school": <BiDesktop className="text-xl" />,
    Creating: <BiPencil className="text-xl" />,
    Family: <BiGroup className="text-xl" />,

    // Storage icons
    "In the cloud": <BiCloud className="text-xl" />,
    "On my PC": <BiLaptop className="text-xl" />,

    // Priority icons
    "Larger screen size": <BiFullscreen className="text-xl" />,
    "Interactive screen": <BiWindowAlt className="text-xl" />,
    Portability: <BiMobile className="text-xl" />,
    Security: <BiLock className="text-xl" />,
  };

  return iconMap[optionTitle] || <BiLaptop className="text-xl" />;
};

export default function QuizComponet({ onQuizComplete, getRecsName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  useState(() => {
    console.log(answers);
  }, [answers]);

  const handleAnswer = (option) => {
    const question = questions[currentQuestion];
    let updatedAnswers = { ...answers };

    if (!updatedAnswers[question.id]) {
      updatedAnswers[question.id] = [];
    }

    if (updatedAnswers[question.id].some((a) => a.title === option.title)) {
      updatedAnswers[question.id] = updatedAnswers[question.id].filter(
        (a) => a.title !== option.title
      );
    } else if (updatedAnswers[question.id].length < question.maxSelections) {
      updatedAnswers[question.id] = [...updatedAnswers[question.id], option];
    }

    setAnswers(updatedAnswers);
  };

  const isOptionSelected = (option) =>
    answers[questions[currentQuestion].id]?.some(
      (a) => a.title === option.title
    );

  const isMaxSelectionsReached = () => {
    const question = questions[currentQuestion];
    return answers[question.id]?.length === question.maxSelections;
  };

  const goToNextQuestion = () => {
    let nextQuestion = currentQuestion + 1;
    while (
      nextQuestion < questions.length &&
      questions[nextQuestion].showIf &&
      !questions[nextQuestion].showIf(answers)
    ) {
      nextQuestion++;
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onQuizComplete(answers);
    }
  };

  const goToPreviousQuestion = () => {
    let prevQuestion = currentQuestion - 1;
    while (
      prevQuestion >= 0 &&
      questions[prevQuestion].showIf &&
      !questions[prevQuestion].showIf(answers)
    ) {
      prevQuestion--;
    }
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-[#0067b8]">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            Complete
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-[#0067b8] h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <BiLaptop className="text-2xl text-[#0067b8]" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            {question.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => {
          const isSelected = isOptionSelected(option);
          const isDisabled = !isSelected && isMaxSelectionsReached();

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isDisabled}
              className={`p-4 text-left border rounded-lg transition-all duration-200 group relative
                ${
                  isSelected
                    ? "border-[#0067b8] bg-blue-50"
                    : isDisabled
                    ? "border-gray-200 bg-gray-50 cursor-not-allowed opacity-60"
                    : "border-gray-200 hover:border-[#0067b8] hover:bg-blue-50"
                }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${
                    isSelected
                      ? "bg-[#0067b8] text-white"
                      : "bg-gray-100 text-gray-500 group-hover:text-[#0067b8] group-hover:bg-blue-100"
                  }`}
                >
                  {getOptionIcon(option.title)}
                </div>
                <div className="flex flex-col">
                  <span
                    className={`font-medium ${
                      isSelected ? "text-[#0067b8]" : "text-gray-700"
                    }`}
                  >
                    {option.title}
                  </span>
                  {option.description && (
                    <span className="text-sm text-gray-500">
                      {option.description}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        {currentQuestion > 0 && (
          <button
            onClick={goToPreviousQuestion}
            className="flex items-center gap-2 px-6 py-2 text-[#0067b8] border border-[#0067b8] rounded-full 
                     hover:bg-blue-50 transition-colors duration-300"
          >
            <BiLeftArrowAlt className="text-xl" />
            Previous
          </button>
        )}

        {answers[question.id]?.length > 0 &&
          currentQuestion < questions.length - 1 && (
            <button
              onClick={goToNextQuestion}
              className="flex items-center gap-2 px-6 py-2 bg-[#0067b8] text-white rounded-full 
                     hover:bg-blue-700 transition-colors duration-300"
            >
              Next
              <BiRightArrowAlt className="text-xl" />
            </button>
          )}

        {currentQuestion === questions.length - 1 &&
          answers[question.id]?.length > 0 && (
            <button
              onClick={() => onQuizComplete(answers)}
              className="flex items-center justify-center w-[250px] gap-2 px-6 py-2 bg-[#0067b8] text-white rounded-full 
              hover:bg-blue-700 transition-colors duration-300"
            >
              {getRecsName}
              {getRecsName === "" ? (
                <BiLoaderCircle className="text-xl animate-spin" />
              ) : (
                <BiRightArrowAlt className="text-xl" />
              )}
            </button>
          )}
      </div>
    </div>
  );
}
