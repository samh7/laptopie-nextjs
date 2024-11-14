"use client";
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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function QuizComponet({ onQuizComplete, getRecsName, submitName}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  // const [submitName, setSubmitName] = useState("Submit");

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
      // setSubmitName("")
      onQuizComplete(answers);
      // setSubmitName("Submit");
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
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      {/* Progress Section */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-primary font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-muted-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <BiLaptop className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {question.question}
          </h3>
        </div>

        {/* Options Grid */}
        <div
          className={cn(
            "grid gap-4",
            // Adjust grid columns based on number of options
            question.options.length <= 2
              ? "grid-cols-1"
              : question.options.length <= 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            // Add max-width constraints based on number of options
            question.options.length <= 2 ? "max-w-2xl mx-auto" : "w-full"
          )}
        >
          {question.options.map((option, index) => {
            const isSelected = isOptionSelected(option);
            const isDisabled = !isSelected && isMaxSelectionsReached();

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "cursor-pointer transition-all hover:shadow-md h-full", // Added h-full
                    isSelected && "border-primary ring-2 ring-primary/20",
                    isDisabled && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => !isDisabled && handleAnswer(option)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {getOptionIcon(option.title)}
                      </div>
                      <div className="space-y-1">
                        <h4
                          className={cn(
                            "font-medium",
                            isSelected && "text-primary"
                          )}
                        >
                          {option.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        {currentQuestion > 0 && (
          <Button
            variant="outline"
            onClick={goToPreviousQuestion}
            className="flex items-center gap-2"
          >
            <BiLeftArrowAlt className="h-4 w-4" />
            Previous
          </Button>
        )}

        <div className="ml-auto flex gap-2">
          {answers[question.id]?.length > 0 &&
            currentQuestion < questions.length - 1 && (
              <Button
                onClick={goToNextQuestion}
                className="flex items-center gap-2"
              >
                Next
                <BiRightArrowAlt className="h-4 w-4" />
              </Button>
            )}

          {currentQuestion === questions.length - 1 &&
            answers[question.id]?.length > 0 && (
              <Button
                onClick={() => onQuizComplete(answers)}
                className="min-w-[100px]"
                disabled={submitName === ""}
              >
                {submitName === "" ? (
                  <BiLoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  submitName 
                )}
              </Button>
            )}
        </div>
      </div>
    </div>
  );
}
