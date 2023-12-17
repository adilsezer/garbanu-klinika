// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@components/layout/SectionTitle";
import ProductsByTypeCard from "./ProductsByTypeCard";
import useFirestoreCollection from "@hooks/useFirestoreCollection";
import ErrorComponent from "@components/common/ErrorComponent";
import LoadingComponent from "@components/common/LoadingComponent";
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig";

const ProductsByTypeGallery: React.FC = () => {
  const { productTypes, loading, error } = useFirestoreCollection(
    FIRESTORE_COLLECTIONS.productTypes
  );
  const t = useTranslations("ProductsByTypeGallery");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <div className="flex flex-wrap justify-center gap-2 md:gap-8">
        {Array.isArray(productTypes) &&
          productTypes.map((productType) => (
            <ProductsByTypeCard key={productType.id} product={productType} />
          ))}
      </div>
    </div>
  );
};

export default ProductsByTypeGallery;
