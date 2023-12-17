// components/CurlArrow.tsx
import Image from "next/image";
import React from "react";

// Define the properties you might want to pass to the CurlArrow component
type CurlArrowProps = {
  width?: number;
  height?: number;
  alt?: string;
};

const CurlArrow: React.FC<CurlArrowProps> = ({
  width = 24,
  height = 24,
  alt = "Curl Arrow",
}) => {
  return (
    <div className="flex justify-center mt-4">
      <Image
        src="/icons/black-curl-arrow.svg" // The path to your SVG file
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
};

export default CurlArrow;
