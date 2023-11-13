import React, { useState } from "react";
import Image from "next/image";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the search bar between expanded and icon-only views on mobile
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile SearchBar: Initially an icon, expands to full width */}
      <div className="md:hidden">
        <div
          className={`relative flex items-center justify-center p-2 w-1/3 ${
            isExpanded ? "hidden" : "flex"
          } rounded-full border border-gray-400`}
          onClick={handleToggleExpand}
        >
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
          />
        </div>
        {isExpanded && (
          <div className="flex items-center pl-3 pr-3 w-full border border-gray-400 rounded-full">
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="bg-transparent pl-2 pr-3 py-2 w-full rounded-full text-base focus:outline-none"
              onBlur={() => setIsExpanded(false)}
              autoFocus
            />
            <Image
              src="/icons/search-icon.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
        )}
      </div>

      {/* Desktop SearchBar: Always visible */}
      <div className="hidden md:flex relative bg-secondary border border-gray-400 rounded-full w-full max-w-xs lg:max-w-[250px]">
        <input
          name="search"
          type="text"
          placeholder="Search"
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
