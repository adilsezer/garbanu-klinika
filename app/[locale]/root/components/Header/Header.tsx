// components/Header.tsx
import React from "react";
import PromoBanner from "./PromoBanner/PromoBanner";
import TopBar from "./TopBar/TopBar";
import MenuLinks from "./MenuLinks/MenuLinks";
import HomePageBanner from "./HomePageBanner/HomePageBanner";

export default function Header() {
  return (
    <div>
      <PromoBanner />
      <TopBar />
      <MenuLinks />
      <HomePageBanner />
    </div>
  );
}
