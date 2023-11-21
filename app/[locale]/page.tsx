import React from "react";
import Header from "./root/components/Header/Header";
import ProductTypeGallery from "./root/components/Header/ProductTypePanel/ProductTypeGallery";
import AllProductsGallery from "./root/components/Header/AllProductsPanel/AllProductsGallery";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductTypeGallery />
      <AllProductsGallery />
    </main>
  );
}
