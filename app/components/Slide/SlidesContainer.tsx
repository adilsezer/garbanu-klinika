import React from "react";
import Slide from "./Slide";
import { Slide as SlideType } from "./slidesData";

interface SlidesContainerProps {
  slides: SlideType[];
  currentSlide: number;
  viewportHeight: number;
}

const SlidesContainer: React.FC<SlidesContainerProps> = ({
  slides,
  currentSlide,
  viewportHeight,
}) => {
  const translateY = -currentSlide * viewportHeight; // Directly derive the value

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        height: `${slides.length * viewportHeight}px`,
      }}
      className="transition-transform duration-500 ease-in-out"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          style={{ height: `${viewportHeight}px` }}
          className="flex items-center justify-center overflow-hidden"
        >
          <Slide
            title={slide.title}
            type={slide.type}
            subtitle={slide.subtitle}
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
