import React from "react";
import TopBarItem from "./TopBarItem";

interface TopBarProps {
  slides: {
    title: string;
  }[];
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  slides,
  currentSlide,
  onSlideChange,
}) => (
  <div className="absolute top-0 md:m-2 left-0 flex flex-wrap justify-center md:justify-normal gap-y-4 space-x-2 p-2 z-10 w-screen">
    {slides.map((slide, index) => (
      <TopBarItem
        key={slide.title}
        label={slide.title}
        isActive={index === currentSlide}
        onClick={() => onSlideChange(index)}
      />
    ))}
  </div>
);

export default TopBar;
