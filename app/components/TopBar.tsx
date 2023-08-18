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
}) => {
  return (
    <div className="absolute top-0 left-0 flex space-x-2 p-4 z-10">
      {slides.map((slide, index) => (
        <TopBarItem
          key={index}
          label={slide.title}
          isActive={index === currentSlide}
          onClick={() => onSlideChange(index)}
        />
      ))}
    </div>
  );
};

export default TopBar;
