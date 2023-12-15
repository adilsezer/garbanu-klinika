import React from "react";
import Image from "next/image";

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
    <div className="card bg-white w-full h-60 flex flex-col">
      <div className="relative w-full h-1/2">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="card-body z-10 flex items-center justify-center p-4">
        <div>
          <h2 className="card-title">{name}</h2>
          {productTypeName && <p>{productTypeName}</p>}
          <p>{`€${price.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
