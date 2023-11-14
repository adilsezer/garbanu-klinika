"use client";
import React from "react";
import Button from "./../../../../components/Button"; // Update the import path as needed
import Image from "next/image";

interface ProductType {
  id: number;
  imageUrl: string;
  buttonText: string;
}

const ProductTypeCard: React.FC = () => {
  const productTypes: ProductType[] = [
    {
      id: 1,
      imageUrl: "/product-types/shampoo.jpg", // Replace with your actual image paths
      buttonText: "ŠAMPŪNAI",
    },
    {
      id: 2,
      imageUrl: "/product-types/conditioner.jpg", // Replace with your actual image paths
      buttonText: "KONDICIONIERAI",
    },
    {
      id: 3,
      imageUrl: "/product-types/shaping-tools.jpg",
      buttonText: "FORMAVIMO PRIEMONĖS",
    },
    {
      id: 4,
      imageUrl: "/product-types/procedures.jpg",
      buttonText: "PROCEDUROS",
    },
    // ... other products
  ];

  const handleButtonClick = (id: number) => {
    console.log(`Button clicked for product id: ${id}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-4 md:my-8">
      {productTypes.map((product) => (
        <div
          key={product.id}
          className="flex flex-col relative rounded-lg shadow-md overflow-hidden h-80 w-[45%] md:w-[22%]"
        >
          {/* Background image */}
          <Image
            src={product.imageUrl}
            alt={product.buttonText}
            fill
            className="object-cover"
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
          />

          {/* Button at the bottom of the card */}
          <div className="px-4 pb-4 absolute bottom-0 left-0 w-full">
            <Button
              text={product.buttonText}
              onClick={() => handleButtonClick(product.id)}
              size="medium"
              className="w-full bg-secondary"
            />
          </div>

          {/* Semi-transparent overlay to ensure text is readable on any image */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductTypeCard;
