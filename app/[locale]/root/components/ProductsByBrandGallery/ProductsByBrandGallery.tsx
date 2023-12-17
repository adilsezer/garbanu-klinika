// ProductsByBrandGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@components/layout/SectionTitle";
import useFirestoreCollection from "@hooks/useFirestoreCollection"; // Corrected import
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig";
import ProductsByBrandCard from "./ProductsByBrandCard"; // Added import

const ProductsByBrandGallery: React.FC = () => {
  const {
    brands: productBrands,
    loading,
    error,
  } = useFirestoreCollection(FIRESTORE_COLLECTIONS.brands);
  const t = useTranslations("ProductsByBrandGallery");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("productBrandsTitle")} />
      <div className="flex flex-wrap gap-2 md:gap-8 mx-10">
        {Array.isArray(productBrands) &&
          productBrands.map((productBrand) => (
            <ProductsByBrandCard key={productBrand.id} product={productBrand} />
          ))}
      </div>
    </div>
  );
};

export default ProductsByBrandGallery;
