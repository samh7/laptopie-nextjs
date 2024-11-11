import React from "react";

const useCases = {
  "Just the basics": 0,
  Entertainment: 1,
  Family: 2,
  "Work or school": 3,
  Creating: 4,
  Gaming: 5,
};

const lightOrHeavy = {
  Light: 0,
  Heavy: 1,
};

const placeOfUse = {
  "Always at my desk": 0,
  "At home, but I move around": 1,
  "Anywhere with a wireless connection": 2,
};

const priority = {
  "Larger screen size": 0,
  "Interactive screen": 1,
  Portability: 2,
  Performance: 3,
  Security: 4,
  "I'm not sure yet": 5,
};

const gaming = {
  "Simple and basic": 0,
  "Complex and realistic": 1,
};
const creativity = {
  Beginner: 0,
  "Intermediate to advanced": 1,
};
const storageType = {
  "In the cloud": 0,
  "On my PC": 1,
};

export default function UserAnswersReview() {
  return <div>UserAnswersReview</div>;
}

export {
  priority,
  creativity,
  storageType,
  gaming,
  placeOfUse,
  lightOrHeavy,
  useCases,
};