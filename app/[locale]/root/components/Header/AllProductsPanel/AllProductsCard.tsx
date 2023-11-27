// AllProductsCard.tsx

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string;
  productType?: string;
}

const AllProductsCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  imageUrl,
  productType,
}) => {
  const formattedPrice = `€${productPrice.toFixed(2)}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-[45%] md:w-[22%]">
      <div className="relative h-24 md:h-52 w-full">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {productName}
        </h2>
        {productType && (
          <h3 className="text-sm md:text-md font-medium text-gray-600">
            {productType}
          </h3>
        )}
        <p className="text-gray-600 mt-1">{formattedPrice}</p>
        {/* Additional buttons or UI elements here */}
      </div>
    </div>
  );
};

export default AllProductsCard;
