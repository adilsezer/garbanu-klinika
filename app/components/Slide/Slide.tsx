// Slide.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Import the Image component

interface SlideProps {
  title: string;
  content?: string;
  image?: string;
  contents?: {
    serviceName: string;
    productName: string;
    price: string;
    image: string;
  }[];
  buttons?: { label: string; action: string }[];
}

const Slide: React.FC<SlideProps> = ({
  title,
  content,
  image,
  contents,
  buttons,
}) => (
  <div
    className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center p-4 md:p-0"
    style={{ backgroundImage: image ? `url(${image})` : undefined }}
  >
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        contents ? "" : "mt-96"
      }`}
    >
      <h1
        className={`text-4xl md:text-8xl font-extrabold ${
          contents ? "text-primary" : "text-secondary shadow-text"
        }`}
      >
        {title}
      </h1>

      {content && (
        <p className="text-2xl md:text-6xl text-secondary shadow-text text-center pt-5 ">
          {content}
        </p>
      )}
      {contents && (
        <div className="flex flex-wrap justify-center space-x-2 m-2 md:m-4">
          {contents.slice(0, 5).map((contentItem, index) => (
            <div
              key={contentItem.serviceName}
              className="relative m-1 md:m-2 w-1/3 md:w-60"
            >
              <div className="h-40 md:h-80 shadow-lg relative overflow-hidden mb-4 rounded-lg">
                <Image
                  src={contentItem.image}
                  alt={`Product ${index + 1}`}
                  className="object-cover w-full h-full"
                  layout="responsive"
                  width={3}
                  height={4}
                />
                {/* ... rest of the code ... */}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-4">
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
