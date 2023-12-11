import React from "react";
import ProductTypeGallery from "./root/components/ProductTypeGallery/ProductTypeGallery";
import AllProductsGallery from "./root/components/AllProductsGallery/AllProductsGallery";
import AddProductComponent from "./root/components/TestComponent/AddProductComponent";
import HomePageBanner from "./root/components/HomePageBanner/HomePageBanner";
import PromotionalBanner from "./root/components/PromotionalBanner/PromotionalBanner";
import TopBar from "./root/components/TopBar/TopBar";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <TopBar />
      <HomePageBanner />
      <ProductTypeGallery />
      <AllProductsGallery />
      <AddProductComponent />
    </main>
  );
}
