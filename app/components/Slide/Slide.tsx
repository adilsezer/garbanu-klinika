// Slide.tsx
import React from "react";
import Link from "next/link";

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
    className="h-screen w-full flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: image ? `url(${image})` : undefined }}
  >
    <div className={contents ? "" : "mt-96"}>
      <h1
        className={`text-8xl font-extrabold text-center	${
          contents ? "text-primary" : "text-secondary shadow-text"
        }`}
      >
        {title}
      </h1>

      {content && (
        <p className="text-6xl text-secondary shadow-text text-center pt-5">
          {content}
        </p>
      )}
      {contents && (
        <div className="flex justify-center space-x-4 m-16 flex-wrap">
          {contents.slice(0, 5).map((contentItem, index) => (
            <div key={index} className="relative">
              {" "}
              {/* Removed "card" class */}
              <div className="w-60 h-80 shadow-lg relative overflow-hidden mb-4 rounded-lg">
                {" "}
                {/* Adjusted height for 60-40 ratio */}
                <img
                  src={contentItem.image}
                  alt={`Product ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 p-2 text-white font-semibold">
                  {" "}
                  {/* Overlay with semi-transparent background */}
                  <p>{contentItem.serviceName}</p>
                  <p>{contentItem.productName}</p>
                  <p>{contentItem.price}</p>
                </div>
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
