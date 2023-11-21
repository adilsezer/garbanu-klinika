// ProductPage.tsx
"use client";
import React from "react";
import ProductCard from "./AllProductsCard";
import { useProductCardCatalog } from "@/hooks/useProductCardCatalog"; // use the updated hook
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import { useTranslations } from "next-intl";
import ErrorComponent from "@/app/[locale]/components/ErrorComponent";
import LoadingComponent from "@/app/[locale]/components/LoadingComponent";

interface ProductCardData {
  id: string;
  name: string; // Localized name
  price: number;
  imageUrl: string;
  productType: string; // Localized product type
  // include other fields from your Firestore product documents as needed
}

const ProductPage: React.FC = () => {
  const { data: productCardData, loading, error } = useProductCardCatalog();

  const t = useTranslations("AllProductsPanel");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("allProductsTitle")} />
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-4 md:my-8">
        {productCardData?.map((product: ProductCardData) => (
          <ProductCard
            key={product.id}
            productName={product.name} // Localized name is directly used
            productPrice={product.price}
            imageUrl={product.imageUrl}
            productType={product.productType} // Localized product type is directly used
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
