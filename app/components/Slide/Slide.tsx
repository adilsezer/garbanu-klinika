import React from "react";

interface SlideProps {
  title: string;
  content: string;
  image: string;
}

// Component to display individual slides
const Slide: React.FC<SlideProps> = ({ title, content, image }) => (
  <div
    className="h-screen w-full flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="mt-60">
      <h1 className="text-7xl text-secondary shadow-text">{title}</h1>
      <p className="text-4xl text-secondary shadow-text text-center pt-5">
        {content}
      </p>
    </div>
  </div>
);

export default Slide;
