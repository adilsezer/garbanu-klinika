"use client";

import React, { useState, useRef, useEffect } from "react";
import TopBar from "../TopBar/TopBar";
import SlidesContainer from "./SlidesContainer";
import slidesData from "./slidesData";
import SocialMediaIcons from "../SocialMedia/SocialMediaIcons";
import SlideDots from "./SlideDots";

const FullPageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
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

  const setVH = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();

    return () => {
      window.removeEventListener("resize", setVH);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onWheel={handleScroll}
      className="h-screen overflow-hidden relative"
    >
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
