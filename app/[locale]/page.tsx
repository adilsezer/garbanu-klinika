import React from "react";
import ProductsByTypeGallery from "./root/components/ProductsByTypeGallery/ProductsByTypeGallery";
import AllProductsGallery from "./root/components/AllProductsGallery/AllProductsGallery";
import AddProductComponent from "./root/components/TestComponent/AddProductComponent";
import HomePageBanner from "./root/components/HomePageBanner/HomePageBanner";
import PromotionalBanner from "./root/components/PromotionalBanner/PromotionalBanner";
import TopBar from "./root/components/TopBar/TopBar";
import ProductsByBrandGallery from "./root/components/ProductsByBrandGallery/ProductsByBrandGallery";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <TopBar />
      <HomePageBanner />
      <ProductsByTypeGallery />
      <AllProductsGallery />
      <ProductsByBrandGallery />
      <AddProductComponent />
    </main>
  );
}
