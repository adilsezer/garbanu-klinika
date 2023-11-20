import React from "react";

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string;
}

const AllProductsCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  imageUrl,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={productName}
        className="w-full object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{productName}</h2>
        <p className="text-gray-500">€{productPrice.toFixed(2)}</p>
        <div className="flex space-x-2 mt-3">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-full">
            <svg className="w-6 h-6" /* Add your cart icon SVG here */></svg>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-full">
            <svg
              className="w-6 h-6" /* Add your wish list icon SVG here */
            ></svg>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-3 rounded-full">
            <svg className="w-6 h-6" /* Add your share icon SVG here */></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
