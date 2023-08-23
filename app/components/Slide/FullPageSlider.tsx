"use client";

// FullPageSlider.tsx

import React, { useState, useRef } from "react";
import TopBar from "../TopBar/TopBar";
import SlidesContainer from "./SlidesContainer";
import slidesData from "./slidesData";
import SocialMediaIcons from "../SocialMedia/SocialMediaIcons";
import SlideDots from "./SlideDots";
import ScrollHint from "./ScrollHint";

const FullPageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lastScrollTime = useRef(Date.now());

  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleScroll = (e: React.WheelEvent) => {
    // ... existing scroll logic, e.g.:
    const currentTime = Date.now();
    if (currentTime - lastScrollTime.current < 1100) {
      return; // Prevents sudden multiple scroll events in short duration.
    }

    if (e.deltaY > 0 && currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    lastScrollTime.current = currentTime;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY !== null) {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchEndY > touchStartY + 10 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (
        touchEndY < touchStartY - 10 &&
        currentSlide < slidesData.length - 1
      ) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    setTouchStartY(null);
  };

  return (
    <div
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="h-screen overflow-hidden relative"
    >
      <SlidesContainer slides={slidesData} currentSlide={currentSlide} />
      <SocialMediaIcons />
      <TopBar
        slides={slidesData}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <ScrollHint></ScrollHint>
      <SlideDots slides={slidesData} currentSlide={currentSlide} />
    </div>
  );
};

export default FullPageSlider;
