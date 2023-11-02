import React from "react";
import PromotionalBanner from "./root/components/PromotionalBanner";
import Header from "./root/components/Header";

const MainPage: React.FC = () => {
  return (
    <main>
      console.log(process.env.VERCEL_ENV);
      <PromotionalBanner />
      <Header />
    </main>
  );
};

export default MainPage;
