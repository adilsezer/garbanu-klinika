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
    <div className="md:hidden relative">
      {isExpanded && (
        <div className="absolute top-0 left-0 w-screen z-50 bg-secondary">
          <div className="flex items-center p-2 rounded-full justify-start h-10 px-6 mx-6 border border-gray-400">
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
        <div
          className="w-10 ml-4 h-10 flex items-center p-2 rounded-full border border-gray-400 justify-center cursor-pointer"
          onClick={handleToggleExpand}
        >
          <Image
            src="/icons/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
}
