import React, { useState } from "react";
import Image from "next/image";

interface MobileSearchBarProps {
  placeholder: string;
}

export default function MobileSearchBar({ placeholder }: MobileSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {isExpanded && (
        <div className="md:hidden relative w-screen z-50 bg-secondary">
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
              placeholder={placeholder}
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
    </>
  );
}
