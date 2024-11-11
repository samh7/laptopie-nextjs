import { Laptop, QuizAnswers } from "@/interfaces/interfaces";
import { create, StoreApi, UseBoundStore } from "zustand";

export const useMyStore: UseBoundStore<StoreApi<Laptop[] | any>> = create(
  (set) => ({
    expandedTopBar: false,
    setExpandedTopBar: (value: any) =>
      set(() => ({
        expandedTopBar: value,
      })),

    userInfo: null,
    setUserInfo: (value: any) =>
      set(() => ({
        expandedTopBar: value,
      })),

    alert: null,
    setAlert: (alert: any) => set({ alert }),

    reccomendations: [],
    setRecommendations: (value: Laptop[]) =>
      set(() => ({
        reccomendations: value,
      })),

    answers: null,
    setAnswers: (value: QuizAnswers) =>
      set(() => ({
        answers: value,
      })),

    infoLaptop: null,
    setInfoLaptop: (value: Laptop) =>
      set(() => ({
        reccomendationsinfoLaptop: value,
      })),
  })
);
