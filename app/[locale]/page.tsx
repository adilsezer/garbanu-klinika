import React from "react";
import Header from "./root/components/Header/Header";
import ProductTypeGallery from "./root/components/Header/ProductType/ProductTypeGallery";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductTypeGallery />
    </main>
  );
}
