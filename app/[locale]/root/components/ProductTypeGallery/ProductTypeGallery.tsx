// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@components/layout/SectionTitle";
import ProductTypeCard from "./ProductTypeCard";
import useProductTypes from "@/hooks/useProductTypes";
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";

const ProductTypeGallery: React.FC = () => {
  const { productTypes, loading, error } = useProductTypes();
  const t = useTranslations("ProductTypesPanel");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <div className="flex flex-wrap justify-center gap-2 md:gap-8">
        {productTypes.map((product) => (
          <ProductTypeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTypeGallery;
