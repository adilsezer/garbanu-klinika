import React from "react";
import Header from "./root/components/Header/Header";
import ProductTypeCard from "./root/components/Header/Cards/ProductTypeCard";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductTypeCard />
    </main>
  );
}
