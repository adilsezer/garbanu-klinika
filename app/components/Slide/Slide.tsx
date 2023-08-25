import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SlideType } from "./SlideType";

interface SlideProps {
  title: string;
  type: SlideType;
  subtitle?: string;
  image?: string;
  contents?: {
    contentName: string;
    contentDesc?: string;
    contentPrice?: string;
    contentImage?: string;
  }[];
  buttons?: {
    label: string;
    action: string;
  }[];
}

const Slide: React.FC<SlideProps> = ({
  title,
  type,
  subtitle,
  image,
  contents,
  buttons,
}) => {
  const renderContentCard = (
    contentItem: {
      contentName: string;
      contentDesc?: string;
      contentPrice?: string;
      contentImage?: string;
    },
    index: number
  ) => {
    const card = (
      <div className="shadow-lg relative overflow-hidden rounded-lg h-full w-full">
        {contentItem.contentImage && (
          <Image
            fill
            src={contentItem.contentImage}
            alt={`Product ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-primary-opacity-30 font-semibold p-1 md:p-2">
          <p className="text-xs md:text-base text-white">
            {contentItem.contentName}
          </p>
          <p className="text-xs md:text-base text-white">
            {contentItem.contentDesc}
          </p>
          <p className="text-xs md:text-base text-white">
            {contentItem.contentPrice}
          </p>
        </div>
      </div>
    );

    if (type === SlideType.Product && contentItem.contentDesc) {
      return (
        <Link
          key={contentItem.contentName}
          href={`/${contentItem.contentDesc.replace(" ", "")}`}
        >
          {card}
        </Link>
      );
    }

    return card;
  };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-cover bg-center p-4 overflow-hidden"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div
        className={`flex flex-col items-center justify-center h-screen ${
          type === SlideType.Main ? "mt-64" : ""
        }`}
      >
        <h1
          className={`text-4xl md:text-8xl font-extrabold shadow-text hover:transform hover:scale-105 transition-transform duration-300 ease-in-out ${
            image ? "text-secondary" : "text-primary"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-4xl md:text-6xl text-secondary shadow-text text-center pt-4 ">
            {subtitle}
          </p>
        )}

        {(type === SlideType.Product || type === SlideType.Service) &&
          contents && (
            <div className="flex flex-wrap justify-center my-2 md:my-8 w-screen">
              {contents.slice(0, 4).map((contentItem, index) => (
                <div
                  key={contentItem.contentName}
                  className={`relative mx-2 my-2 w-2/5 h-24 md:w-1/6 md:h-60 ${
                    type === SlideType.Product ? "cursor-pointer" : ""
                  }`}
                >
                  {renderContentCard(contentItem, index)}
                </div>
              ))}
            </div>
          )}

        {type === SlideType.TextCard && contents && (
          <div className="flex flex-wrap justify-center my-2 md:my-10">
            {contents.slice(0, 4).map((contentItem, index) => (
              <div
                key={contentItem.contentName}
                className="relative m-2 md:m-4 w-11/12 md:w-1/6 h-auto bg-gradient-to-br from-primary to-primary-opacity-50 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-4">
                  <p className="font-bold text-white text-center mb-1">
                    {contentItem.contentName}
                  </p>
                  {contentItem.contentDesc && (
                    <p className="text-white text-xs md:text-sm leading-relaxed text-justify mt-2">
                      {contentItem.contentDesc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center space-x-4 mt-4">
          {buttons &&
            buttons.map((button, index) => (
              <Link key={index} href={button.action}>
                <button className="border border-secondary bg-primary-opacity-50 font-semibold text-secondary shadow-text text-xl px-4 py-2 rounded mt-4 inline-block hover:bg-primary hover:text-secondary transition-colors duration-300">
                  {button.label}
                </button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
