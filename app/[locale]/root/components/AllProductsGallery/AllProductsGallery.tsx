"use client";
import React, { useState, useRef } from "react";
import ProductCard from "./AllProductsCard";
import { useProductCardCatalog } from "@/hooks/useProductCardCatalog";
import SectionTitle from "@components/layout/SectionTitle";
import { useTranslations } from "next-intl";
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";
import useResponsiveItems from "@/hooks/useResponsiveItems";
import ArrowButton from "@components/common/ArrowButton";

const AllProductsGallery: React.FC = () => {
  const { data, loading, error } = useProductCardCatalog();
  const t = useTranslations("AllProductsGallery");
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerView = useResponsiveItems();

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current || !data) return;

    const itemsToScroll = itemsPerView;
    const offset = direction === "left" ? -itemsToScroll : itemsToScroll;

    const newIndex = Math.min(
      Math.max(0, activeIndex + offset),
      data.length - itemsPerView
    );

    setActiveIndex(newIndex);

    carouselRef.current.scrollTo({
      left: (carouselRef.current.scrollWidth / data.length) * newIndex,
      behavior: "smooth",
    });
  };

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("allProductsTitle")} />
      <div className="relative w-full">
        <div className="flex items-center justify-center">
          <ArrowButton direction="left" onClick={() => handleScroll("left")} />

          <div
            ref={carouselRef}
            className="flex overflow-hidden mx-4 md:mx-10 gap-2 md:gap-4"
          >
            {data?.map((product) => (
              <div key={product.id} className="flex-none w-[49%] md:w-[17%]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <ArrowButton
            direction="right"
            onClick={() => handleScroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductsGallery;
