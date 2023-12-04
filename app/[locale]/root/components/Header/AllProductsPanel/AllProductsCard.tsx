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
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out h-full flex flex-col">
      <div className="relative w-full flex-shrink-0 h-52">
        <Image src={imageUrl} alt={productName} fill className="object-cover" />
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {productName}
        </h2>
        {productType && (
          <h3 className="text-sm font-medium text-gray-600 truncate">
            {productType}
          </h3>
        )}
        <p className="text-gray-600 mt-1">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default AllProductsCard;
