"use client";

import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { Slide as SlideType } from "./slidesData";

// Props for the container that holds all slides
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
      {slides.map((slide) => (
        <Slide
          key={slide.title}
          title={slide.title}
          content={slide.content}
          image={slide.image}
        />
      ))}
    </div>
  );
};

export default SlidesContainer;
