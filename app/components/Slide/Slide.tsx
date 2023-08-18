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
    <div className="bg-rose-600 bg-opacity-50 p-5 rounded-lg shadow-lg">
      <h1 className="text-4xl text-rose-100 font-semibold shadow-text">
        {title}
      </h1>
      <p className="text-rose-100 shadow-text">{content}</p>
    </div>
  </div>
);

export default Slide;
