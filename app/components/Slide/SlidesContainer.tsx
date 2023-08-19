// SlidesContainer.tsx

import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { Slide as SlideType } from "./slidesData";

interface SlidesContainerProps {
  slides: SlideType[];
  currentSlide: number;
}

const SlidesContainer: React.FC<SlidesContainerProps> = ({
  slides,
  currentSlide,
}) => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    setTranslateY(-currentSlide * window.innerHeight);
  }, [currentSlide]);

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        height: `${slides.length * 100}vh`,
      }}
      className="transition-transform duration-500 ease-in-out"
    >
      {slides.map((slide, index) => (
        <div className="h-screen flex items-center justify-center">
          <Slide
            key={slide.title}
            title={slide.title}
            content={slide.content}
            image={slide.image}
            contents={slide.contents}
            buttons={slide.buttons}
          />
        </div>
      ))}
    </div>
  );
};

export default SlidesContainer;
