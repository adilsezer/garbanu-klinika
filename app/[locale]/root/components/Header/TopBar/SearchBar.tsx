import React from "react";
import { useTranslations } from "next-intl";
import MobileSearchBar from "./MobileSearchBar";
import DesktopSearchBar from "./DesktopSearchBar";

export default function SearchBar() {
  const t = useTranslations("SearchBar");

  return (
    <>
      <MobileSearchBar placeholder={t("search")} />
      <DesktopSearchBar placeholder={t("search")} />
    </>
  );
}
