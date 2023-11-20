// components/Header.tsx
import React from "react";
import PromotionalBanner from "./PromotionalBanner/PromotionalBanner";
import TopBar from "./TopBar/TopBar";
import MenuLinks from "./MenuLinks/MenuLinks";
import HomePageBanner from "./HomePageBanner/HomePageBanner";

export default function Header() {
  return (
    <div>
      <PromotionalBanner />
      <TopBar />
      <MenuLinks />
      <HomePageBanner />
    </div>
  );
}
