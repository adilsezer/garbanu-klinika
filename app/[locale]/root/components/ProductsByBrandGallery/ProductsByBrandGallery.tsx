// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@components/layout/SectionTitle";
import ProductsByBrandCard from "./ProductsByBrandCard";
import useProductTypes from "@/hooks/useProductTypes";
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";

const ProductsByBrandCard: React.FC = () => {
  const { productBrands, loading, error } = useProductTypes();
  const t = useTranslations("ProductsByBrandCard");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <div className="flex flex-wrap justify-center gap-2 md:gap-8">
        {productBrands.map((product) => (
          <ProductsByBrandCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByTypeGallery;
