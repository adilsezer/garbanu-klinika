import React from "react";
import Slide from "./Slide";

interface SlidesContainerProps {
  slides: {
    title: string;
    content: string;
    image: string;
  }[];
  currentSlide: number;
}

const SlidesContainer: React.FC<SlidesContainerProps> = ({
  slides,
  currentSlide,
}) => {
  return (
    <div
      style={{
        transform: `translateY(-${currentSlide * 100}%)`,
        height: `${slides.length * 100}vh`,
      }}
      className="transition-transform duration-500 ease-in-out"
    >
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </div>
  );
};

export default SlidesContainer;
