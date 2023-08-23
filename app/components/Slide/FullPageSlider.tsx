"use client";

import React, { useState, useRef } from "react";
import TopBar from "../TopBar/TopBar";
import SlidesContainer from "./SlidesContainer";
import slidesData from "./slidesData";
import SocialMediaIcons from "../SocialMedia/SocialMediaIcons";
import SlideDots from "./SlideDots";

const FullPageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastScrollTime = useRef(Date.now());

  const handleScroll = (e: React.WheelEvent) => {
    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;

    if (timeSinceLastScroll < 1100) {
      return;
    }

    lastScrollTime.current = now;

    if (e.deltaY > 0 && currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div onWheel={handleScroll} className="h-screen overflow-hidden relative">
      <SlidesContainer slides={slidesData} currentSlide={currentSlide} />
      <SocialMediaIcons />
      <TopBar
        slides={slidesData}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <SlideDots slides={slidesData} currentSlide={currentSlide} />
    </div>
  );
};

export default FullPageSlider;
