"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SearchBar() {
  const t = useTranslations("SearchBar");

  return (
    <div className="relative bg-secondary border border-gray-400 rounded-full w-full max-w-xs lg:max-w-[250px]">
      {/* Fixed max-width for large screens */}
      <input
        name="search"
        type="text"
        placeholder={t("search")}
        className="bg-transparent pl-4 pr-10 py-3 w-full rounded-full text-base focus:outline-none"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center">
        <Image
          src="/icons/search-icon.svg"
          alt="Search"
          className="h-5 w-5"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
