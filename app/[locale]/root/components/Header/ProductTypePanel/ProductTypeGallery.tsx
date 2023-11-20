// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import ProductTypeCards from "./ProductTypeCard";
import useProductTypes from "@/hooks/useProductTypes"; // Custom hook for fetching product types
import ErrorComponent from "@/app/[locale]/components/ErrorComponent";
import LoadingComponent from "@/app/[locale]/components/LoadingComponent";

const ProductTypeGallery: React.FC = () => {
  const t = useTranslations("ProductTypes");
  const { productTypes, loading, error } = useProductTypes();

  if (loading) return <LoadingComponent />; // Centralized loading component
  if (error) return <ErrorComponent message={error.message} />; // Centralized error component

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      {productTypes.length > 0 && (
        <ProductTypeCards productTypes={productTypes} />
      )}
    </div>
  );
};

export default ProductTypeGallery;
