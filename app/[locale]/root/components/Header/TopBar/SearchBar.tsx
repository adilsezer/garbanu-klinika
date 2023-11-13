import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("SearchBar");

  const handleToggleExpand = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile SearchBar: Circular icon that expands on click */}
      {isExpanded && (
        <div className="relative w-screen z-50 bg-secondary md:hidden">
          <div className="flex items-center p-2 rounded-full justify-start h-12 px-6 mx-6 border border-gray-400">
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              name="search"
              type="text"
              placeholder={t("search")}
              className="bg-transparent pl-2 pr-3 py-2 w-full rounded-full text-base focus:outline-none"
              onBlur={handleBlur}
              autoFocus
            />
          </div>
        </div>
      )}
      {!isExpanded && (
        <div className="md:hidden">
          <div
            className="w-12 ml-4 h-12 flex items-center p-2 rounded-full border border-gray-400 justify-center"
            onClick={handleToggleExpand}
          >
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
        </div>
      )}

      {/* Desktop SearchBar: Always visible */}
      <div className="hidden md:flex relative bg-secondary border border-gray-400 rounded-full w-full max-w-xs lg:max-w-[250px]">
        <input
          name="search"
          type="text"
          placeholder={t("search")}
          className="bg-transparent pl-4 pr-10 py-3 w-full rounded-full text-base focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
}
