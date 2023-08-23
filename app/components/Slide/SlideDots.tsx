import React from "react";
import { Slide } from "./slidesData";

interface SlideDotsProps {
  slides: Slide[];
  currentSlide: number;
}

const SlideDots: React.FC<SlideDotsProps> = ({ slides, currentSlide }) => (
  <div className="fixed bottom-1.5 right-4 flex flex-col items-center space-y-2">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-bounce-y"
    >
      <path
        d="M5 15L12 8L19 15"
        stroke="var(--secondary-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {slides.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full ${
          currentSlide === index ? "bg-primary" : "bg-secondary"
        }`}
      ></div>
    ))}
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-bounce-y-reverse"
    >
      <path
        d="M5 9L12 16L19 9"
        stroke="var(--secondary-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default SlideDots;
