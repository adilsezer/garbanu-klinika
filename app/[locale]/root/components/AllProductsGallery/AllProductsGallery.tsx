"use client";
import React, { useState, useRef } from "react";
import ProductCard from "./AllProductsCard";
import { useProductCardCatalog } from "@/hooks/useProductCardCatalog";
import SectionTitle from "@components/layout/SectionTitle";
import { useTranslations } from "next-intl";
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useResponsiveItems from "@/hooks/useResponsiveItems";

const AllProductsGallery: React.FC = () => {
  const { data, loading, error } = useProductCardCatalog();
  const t = useTranslations("AllProductsPanel");
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerView = useResponsiveItems();

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current || !data) return;
    const itemsToScroll = 4;
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
        <div className="flex items-center justify-evenly">
          <button
            className="btn btn-primary btn-circle absolute left-14 z-20"
            onClick={() => handleScroll("left")}
          >
            <FaArrowLeft />
          </button>
          <div ref={carouselRef} className="flex overflow-hidden mx-8 gap-4">
            {data?.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[calc(50%-1rem)] md:w-[calc(23%-1rem)]"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <button
            className="btn btn-circle btn-primary absolute right-14 z-20"
            onClick={() => handleScroll("right")}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductsGallery;
