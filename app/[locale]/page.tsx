import React from "react";
import PromotionalBanner from "./root/components/PromotionalBanner";
import Header from "./root/components/Header";

const logVercelEnv = () => {
  console.log(process.env.VERCEL_ENV);
};

const MainPage: React.FC = () => {
  logVercelEnv();

  return (
    <main>
      <PromotionalBanner />
      <Header />
    </main>
  );
};

export default MainPage;
