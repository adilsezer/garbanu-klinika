import React from "react";
import Header from "./root/components/Header/Header";
import ProductTypeGallery from "./root/components/Header/ProductTypePanel/ProductTypeGallery";
import AllProductsGallery from "./root/components/Header/AllProductsPanel/AllProductsGallery";
import AddProductComponent from "./root/components/Header/TestComponent/AddProductComponent";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductTypeGallery />
      <AllProductsGallery />
      <AddProductComponent />
    </main>
  );
}
