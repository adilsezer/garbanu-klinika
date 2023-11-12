// components/Search.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SearchBar() {
  const t = useTranslations("SearchBar");

  return (
    <div className="relative bg-secondary border border-gray-400 rounded-full w-60">
      <input
        name="search"
        type="text"
        placeholder={t("search")}
        className="bg-transparent pl-4 pr-10 py-2 w-full rounded-full text-sm focus:outline-none"
      />
      <Image
        src="/icons/search-icon.svg"
        alt="Search"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
        width={20}
        height={20}
      />
    </div>
  );
}
