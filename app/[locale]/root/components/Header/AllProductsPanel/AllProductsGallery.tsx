"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ProductCard from "./AllProductsCard";
import { useProductCardCatalog } from "@/hooks/useProductCardCatalog";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import { useTranslations } from "next-intl";
import ErrorComponent from "@/app/[locale]/components/ErrorComponent";
import LoadingComponent from "@/app/[locale]/components/LoadingComponent";

const AllProductsGallery: React.FC = () => {
  const { data: productCardData, loading, error } = useProductCardCatalog();
  const t = useTranslations("AllProductsPanel");
  const productContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (productContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        productContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollProducts = (scrollOffset: number) => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("allProductsTitle")} />
      <div className="relative mx-4 md:mx-14">
        {canScrollLeft && (
          <button
            onClick={() => scrollProducts(-300)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md z-10"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="Scroll Left"
              width={24}
              height={24}
            />
          </button>
        )}
        <div
          ref={productContainerRef}
          className="flex overflow-x-auto space-x-4 md:space-x-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-200"
          onScroll={checkScrollPosition}
        >
          {productCardData?.map((product) => (
            <div key={product.id} className="flex-none w-1/2 md:w-1/5">
              <ProductCard
                productName={product.name}
                productPrice={product.price}
                imageUrl={product.imageUrl}
                productType={product.productTypeName}
              />
            </div>
          ))}
        </div>
        {canScrollRight && productCardData && productCardData.length > 2 && (
          <button
            onClick={() => scrollProducts(300)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md z-10"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="Scroll Right"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProductsGallery;
