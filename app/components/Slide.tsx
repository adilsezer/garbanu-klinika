import React from "react";

interface SlideProps {
  title: string;
  content: string;
  image: string;
  children?: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content, image, children }) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 p-5 rounded">
        <h1 className="text-4xl text-white">{title}</h1>
        <p className="text-white">{content}</p>
        {children}
      </div>
    </div>
  );
};

export default Slide;
