import React from "react";
import PromotionalBanner from "./root/components/PromotionalBanner";
import Header from "./root/components/Header";

const Home: React.FC = () => {
  return (
    <main>
      <PromotionalBanner />
      <Header />
    </main>
  );
};

export default Home;
