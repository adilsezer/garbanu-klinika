import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("SearchBar");

  // Toggle the search bar between expanded and icon-only views on mobile
  const handleToggleExpand = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile SearchBar: Circular icon that expands on click */}
      <div className="md:hidden">
        <div
          className={`relative ml-4 flex items-center p-2 rounded-full border border-gray-400 ${
            isExpanded ? "w-full justify-start" : "w-12 justify-center"
          } h-12`}
          onClick={handleToggleExpand}
        >
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
          />
          {isExpanded && (
            <input
              name="search"
              type="text"
              placeholder={t("search")}
              className="bg-transparent pl-2 pr-3 py-2 w-full rounded-full text-base focus:outline-none"
              onBlur={handleBlur}
              autoFocus
            />
          )}
        </div>
      </div>

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
