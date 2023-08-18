"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import SlidesContainer from "./SlidesContainer";

const FullPageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Garbanų Klinika",
      content: "Say Hello to Curls",
      image: "/bg-images/bg-image-main.png",
    },
    {
      title: "Slide 2",
      content: "Slide 2 Content",
      image: "/bg-images/bg-image-product1.jpeg",
    },
  ];

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div onWheel={handleScroll} className="h-screen overflow-hidden relative">
      <TopBar
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <SlidesContainer slides={slides} currentSlide={currentSlide} />
    </div>
  );
};

export default FullPageSlider;
