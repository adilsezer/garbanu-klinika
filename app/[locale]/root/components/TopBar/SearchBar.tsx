// SearchBar component
import React from "react";
import { useTranslations } from "next-intl";
import MobileSearchBar from "./mobile/MobileSearchBar";
import DesktopSearchBar from "./desktop/DesktopSearchBar";

export default function SearchBar() {
  const t = useTranslations("SearchBar");

  const handleSearch = (query: string) => {
    // Define your search logic here
    console.log("Searching for:", query);
    // You can redirect to a search page or set state to display results
  };

  return (
    <>
      <MobileSearchBar searchLabel={t("search")} onSearch={handleSearch} />
      <DesktopSearchBar placeholder={t("search")} />
    </>
  );
}
