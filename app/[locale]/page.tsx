import React from "react";
import ProductsByTypeGallery from "./root/components/ProductsByTypeGallery/ProductsByTypeGallery";
import AllProductsGallery from "./root/components/AllProductsGallery/AllProductsGallery";
import AddProductComponent from "./root/components/TestComponent/AddProductComponent";
import HomePageBanner from "./root/components/HomePageBanner/HomePageBanner";
import PromotionalBanner from "./components/layout/PromotionalBanner/PromotionalBanner";
import TopBar from "./components/layout/TopBar/TopBar";
import ProductsByBrandGallery from "./root/components/ProductsByBrandGallery/ProductsByBrandGallery";
import CurlyProfileCarousel from "./root/components/CurlyProfileCarousel/CurlyProfileCarousel";
import OurServicesGallery from "./root/components/OurServices/OurServicesGallery";
import AddServices from "./root/components/TestComponent/AddServices";
import AboutUs from "./root/components/AboutUs/AboutUs";
import Footer from "./components/layout/Footer/Footer";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <TopBar />
      <HomePageBanner />
      <ProductsByTypeGallery />
      <AllProductsGallery />
      <ProductsByBrandGallery />
      <CurlyProfileCarousel />
      <OurServicesGallery />
      <AboutUs />
      <Footer />
      {/* <AddProductComponent />
      <AddServices /> */}
    </main>
  );
}
