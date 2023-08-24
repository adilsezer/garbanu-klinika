import React, { useState } from "react";
import TopBarItem from "./TopBarItem";
import HamburgerIcon from "./HamburgerIcon";

interface TopBarProps {
  slides: { title: string }[];
  currentSlide: number;
  onSlideChange: (slideIndex: number) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  slides,
  currentSlide,
  onSlideChange,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 md:m-2 left-0 flex flex-wrap md:justify-start gap-y-4 p-2 z-10 w-screen">
      <div className="md:hidden p-2">
        <HamburgerIcon onClick={() => setMenuOpen(!isMenuOpen)} />
      </div>
      <div
        className={`transition-all ease-in-out duration-300 ${
          isMenuOpen ? "flex flex-col space-y-1" : "hidden"
        } md:flex md:flex-row md:space-y-0 md:space-x-2`}
      >
        {slides.map((slide, index) => (
          <TopBarItem
            key={slide.title}
            label={slide.title}
            isActive={index === currentSlide}
            onClick={() => {
              onSlideChange(index);
              setMenuOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
