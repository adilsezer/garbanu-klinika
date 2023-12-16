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
    <div className="card bg-secondary-dark w-full h-60 md:h-80">
      <div className="relative w-full h-[45%]">
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
        <div className="badge badge-primary">€{price.toFixed(2)}</div>
      </div>
      <div className="card-actions justify-center p-2">
        <button className="btn btn-sm btn-circle btn-outline">
          <FiEye size="18" />
        </button>
        <button className="btn btn-sm btn-circle btn-outline">
          <FiHeart size="18" />
        </button>
        <button className="btn btn-sm btn-circle btn-outline">
          <FiShoppingCart size="18" />
        </button>
      </div>
    </div>
  );
};

export default AllProductsCard;
