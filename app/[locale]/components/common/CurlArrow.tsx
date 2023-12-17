import Image from "next/image";
import React from "react";

type CurlArrowProps = {
  sizeClass?: string; // Use Tailwind CSS classes for size
  alt?: string;
};

const CurlArrow: React.FC<CurlArrowProps> = ({
  sizeClass = "w-6 h-6", // Default size, Tailwind classes for width and height
  alt = "Curl Arrow",
}) => {
  return (
    <div className={"flex justify-center mt-2"}>
      <div className={`relative ${sizeClass}`}>
        <Image
          src="/icons/black-curl-arrow.svg"
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default CurlArrow;
