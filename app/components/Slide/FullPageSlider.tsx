"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const [viewportHeight, setViewportHeight] = useState(0); // Initialize to 0

  useEffect(() => {
    // Set the initial height when the component mounts
    setViewportHeight(window.innerHeight);

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="overflow-hidden" // This applies the overflow: hidden style
      style={{ height: `${viewportHeight}px` }}
    >
      <SlidesContainer
        slides={slidesData}
        currentSlide={currentSlide}
        viewportHeight={viewportHeight}
      />
      <SocialMediaIcons />
      <TopBar
        slides={slidesData}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <ScrollHint />
      <SlideDots slides={slidesData} currentSlide={currentSlide} />
    </div>
  );
};

export default FullPageSlider;
