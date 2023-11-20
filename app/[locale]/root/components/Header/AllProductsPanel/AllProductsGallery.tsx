// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import AllProductsCard from "./AllProductsCard"; // Updated import
import useProductTypes from "@/hooks/useProductTypes"; // Custom hook for fetching product types
import ErrorComponent from "@/app/[locale]/components/ErrorComponent";
import LoadingComponent from "@/app/[locale]/components/LoadingComponent";

const ProductTypeGallery: React.FC = () => {
  const t = useTranslations("AllProductsPanel");
  const { productTypes, loading, error } = useProductTypes();

  if (loading) return <LoadingComponent />; // Centralized loading component
  if (error) return <ErrorComponent message={error.message} />; // Centralized error component

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-4 md:my-8">
        {productTypes.map((product) => (
          <AllProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTypeGallery;
