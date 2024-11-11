interface AnswerOption {
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

export  interface LaptopSpecs {
  cpu: string;
  gpu: string;
  ram: number;
  storage: number;
  display: string;
  battery: number;
  weight?: string;
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

  export  interface QuizState {
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
