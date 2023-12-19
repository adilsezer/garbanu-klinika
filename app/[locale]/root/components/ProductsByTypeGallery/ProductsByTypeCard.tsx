// ProductTypeCards.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductType {
  id: string;
  imageUrl: string;
  name: string;
  url: string;
}

const ProductsByTypeCard: React.FC<{ product: ProductType }> = ({
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
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className="card-actions justify-end m-8 z-10">
        <button className="btn btn-secondary w-full shadow-2xl hover:bg-primary-focus">
          {product.name}
        </button>
      </div>
    </Link>
  );
};

export default ProductsByTypeCard;
