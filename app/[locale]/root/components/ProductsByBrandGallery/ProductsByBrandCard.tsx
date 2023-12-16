// ProductBrandCards.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductBrand {
  id: string;
  imageUrl: string;
  buttonText: string;
  url: string;
}

const ProductsByBrandCard: React.FC<{ product: ProductBrand }> = ({
  product,
}) => {
  return (
    <Link
      href={product.url}
      passHref
      className="card shadow-xl flex flex-col w-[45%] md:w-[22%] h-40 md:h-80"
    >
      <div className="card-body">
        <div className="absolute inset-0">
          <Image
            src={product.imageUrl}
            alt={product.buttonText}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className="card-actions justify-end m-8 z-10">
        <button className="btn btn-secondary w-full shadow-2xl hover:bg-primary-focus">
          {product.buttonText}
        </button>
      </div>
    </Link>
  );
};

export default ProductsByBrandCard;