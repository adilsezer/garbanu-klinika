import React from "react";
import Link from "next/link";

interface SlideProps {
  title: string;
  content: string;
  image: string;
  buttons?: { label: string; action: string }[];
}

const Slide: React.FC<SlideProps> = ({ title, content, image, buttons }) => (
  <div
    className="h-screen w-full flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="mt-96">
      <h1 className="text-8xl text-secondary font-extrabold shadow-text">
        {title}
      </h1>
      <p className="text-6xl text-secondary shadow-text text-center pt-5">
        {content}
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        {" "}
        {/* Center the buttons and add space between them */}
        {buttons &&
          buttons.map((button, index) => (
            <Link key={index} href={button.action}>
              <button className="border border-secondary bg-red-950 font-semibold bg-opacity-50 text-secondary shadow-text text-xl px-4 py-2 rounded mt-4 inline-block hover:bg-primary hover:text-secondary transition-colors duration-300">
                {button.label}
              </button>
            </Link>
          ))}
      </div>
    </div>
  </div>
);

export default Slide;
