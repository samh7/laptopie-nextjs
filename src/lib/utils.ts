import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setLaptopsLocalStore(data: string) {
  localStorage.setItem("laptop-recommendations", data);
}

export function getLaptopsLocalStore() {
  const data = JSON.parse(
    JSON.stringify(localStorage.getItem("laptop-recommendations"))
  );

  return JSON.parse(JSON.parse(data)).recommendations;
}

export function deleteLaptopsLocalStore() {
  localStorage.removeItem("laptop-recommendations");
}

export function getLaptopFromLocalStore(id: number) {
  const data = getLaptopsLocalStore();
  return data[id];
}
