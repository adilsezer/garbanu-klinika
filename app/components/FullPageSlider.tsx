// components/FullPageSlider.tsx

import React, { useState } from "react";

interface SlideProps {
  title: string;
  content: string;
  image: string; // URL of the image
}

const FullPageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      title: "Slide 1",
      content: "Slide 1 Content",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Slide 2",
      content: "Slide 2 Content",
      image: "/path/to/image2.jpg",
    },
    // Add more slides as needed
  ];

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div onWheel={handleScroll} className="h-screen overflow-hidden">
      <div
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
        className="transition-transform duration-500 ease-in-out"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-50 p-5 rounded">
              <h1 className="text-4xl text-white">{slide.title}</h1>
              <p className="text-white">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullPageSlider;
