import React from "react";
import TopBarItem from "./TopBarItem";

interface TopBarProps {
  slides: {
    title: string;
  }[];
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

// Component to display the top bar with slide titles
const TopBar: React.FC<TopBarProps> = ({
  slides,
  currentSlide,
  onSlideChange,
}) => (
  <div className="absolute top-4 md:top-0 left-4 flex space-x-2 p-4 z-10">
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
