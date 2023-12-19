import React from "react";
import Image from "next/image";
import { truncate } from "@/utils/textUtils";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

interface AllProductsCardProps {
  name: string;
  price: number;
  imageUrl: string;
  productTypeName?: string;
}

const AllProductsCard: React.FC<AllProductsCardProps> = ({
  name,
  price,
  imageUrl,
  productTypeName,
}) => {
  return (
    <div className="card bg-secondary-dark w-full h-72 md:h-80">
      <div className="relative w-full h-[55%]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <h2 className="card-title justify-center text-base md:text-lg text-center p-1">
        {truncate(name, 30)}
      </h2>
      <div className="card-body justify-center text-center items-center p-1">
        {productTypeName}
      </div>
      <div className="card-actions border-gray-400 border-2 rounded-lg items-center justify-center p-0 md:p-1">
        <div className="badge badge-primary md:mx-4">€{price.toFixed(2)}</div>
        <button className="btn btn-sm btn-ghost p-1">
          <FiEye size="20" />
        </button>
        <button className="btn btn-sm btn-ghost p-1">
          <FiHeart size="20" />
        </button>
        <button className="btn btn-sm btn-ghost p-1">
          <FiShoppingCart size="20" />
        </button>
      </div>
    </div>
  );
};

export default AllProductsCard;
