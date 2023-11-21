import React from "react";
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string;
  productType?: string; // Optional prop for product type
}

const AllProductsCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  imageUrl,
  productType,
}) => {
  // Format price to always show two decimal places
  const formattedPrice = `€${productPrice.toFixed(2)}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-[45%] md:w-[22%]">
      <div className="relative h-24 md:h-52 w-full">
        <Image src={imageUrl} alt={productName} fill className="object-cover" />
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
        <div className="flex items-center justify-between mt-2">
          <button
            aria-label="Add to cart"
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            C{/* Replace with your cart icon SVG */}
          </button>
          <button
            aria-label="Add to wishlist"
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            W{/* Replace with your wish list icon SVG */}
          </button>
          <button
            aria-label="Share product"
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            S{/* Replace with your share icon SVG */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
