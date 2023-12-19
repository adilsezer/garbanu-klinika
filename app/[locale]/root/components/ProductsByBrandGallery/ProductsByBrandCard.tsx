// ProductBrandCards.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductBrand {
  id: string;
  imageUrl: string;
  url: string;
  name: string;
}

const ProductsByBrandCard: React.FC<{ product: ProductBrand }> = ({
  product,
}) => {
  return (
    <div className="flex flex-col w-[45%] md:w-[22%] h-52 md:h-72">
      <Link href={product.url} passHref className="card relative w-full h-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>
      <Link href={product.url} passHref>
        <h1 className="text-lg md:text-xl underline text-primary text-center my-2 md:my-4">
          {product.name}
        </h1>
      </Link>
    </div>
  );
};

export default ProductsByBrandCard;
