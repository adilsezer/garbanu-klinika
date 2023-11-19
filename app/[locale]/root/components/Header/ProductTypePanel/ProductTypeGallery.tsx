"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ProductTypeCard from "./ProductTypeCard"; // Update the import path as needed
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import { url } from "inspector";

interface ProductType {
  id: number;
  imageUrl: string;
  buttonText: string;
  url: string;
}

const ProductTypeGallery: React.FC = () => {
  const t = useTranslations("ProductTypes"); // Assuming 'ProductTypes' is your translation key

  const productTypes: ProductType[] = [
    {
      id: 1,
      imageUrl: "/product-types/shampoo.jpg",
      buttonText: t("shampoo"),
      url: "/products/shampoo",
    },
    {
      id: 2,
      imageUrl: "/product-types/conditioner.jpg",
      buttonText: t("conditioner"),
      url: "/products/conditioner",
    },
    {
      id: 3,
      imageUrl: "/product-types/shaping-tools.jpg",
      buttonText: t("shapingTools"),
      url: "/products/shaping-tools",
    },
    {
      id: 4,
      imageUrl: "/product-types/other-products.jpg",
      buttonText: t("otherProducts"),
      url: "/products/other-products",
    },
  ];

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <ProductTypeCard productTypes={productTypes} />
    </div>
  );
};

export default ProductTypeGallery;
