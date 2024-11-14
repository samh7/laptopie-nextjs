import { IconType } from "react-icons/lib";

interface AnswerOption {
  title: string;
  description: string;
}
export interface Specification {
  title: string;
  description: string;
  detailedExplanation: string;
  recommendation: string;
  externalLinks: {
    text: string;
    url: string;
  }[];
  category: string;
  cheatsheet?: {
    prefix: string;
    meaning: string;
  }[];
}

export interface ChatMessage {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCase {
  icon: IconType;
  title: string;
  description: string;
}

export interface QuizAnswers {
  usage?: AnswerOption[];
  workload?: AnswerOption[];
  browsing?: AnswerOption[];
  editing?: AnswerOption[];
  gaming?: AnswerOption[];
  mobility?: AnswerOption[];
  priority?: AnswerOption[];
  storage?: AnswerOption[];
}

export interface LaptopSpecs {
  cpu: string;
  gpu: string;
  ram: number;
  storage: number;
  display: string;
  battery: number;
  weight?: string;
}

export interface Recommnedation {
  recommendations: Laptop[];
}

export type QuizStep =
  | "usage"
  | "workload"
  | "browsing"
  | "editing"
  | "gaming"
  | "location"
  | "storage"
  | "priority";

export interface QuizState {
  currentStep: QuizStep;
  selections: {
    usage: string[];
    workload: string;
    browsing: string;
    editing: string;
    gaming: string;
    location: string;
    storage: string;
    priority: string;
  };
}

export interface Laptop {
  name: string;
  imageUrl: string;
  priceRange: number;
  specs: LaptopSpecs;
  pros: string[];
  cons: string[];
  shoppingLinks: string[];
  summary: string;
}


export interface SavedLaptop extends Laptop {
  id: string;
  brand: string;
  brandImage: string;
  userId: string;
  price: string;
  chatMessages?: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}