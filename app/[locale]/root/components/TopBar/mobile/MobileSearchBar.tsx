import React, { useState, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import useClickOutside from "@hooks/useClickOutside"; // Assuming the hook is in the same directory

interface MobileSearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export default function MobileSearchBar({
  placeholder,
  onSearch,
}: MobileSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchBarRef = useRef(null);

  useClickOutside(searchBarRef, () => {
    if (isExpanded) setIsExpanded(false);
  });

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setIsExpanded(false);
    }
  };

  return (
    <div className="relative md:hidden">
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm transition duration-300 ease-in-out flex justify-center">
          <div
            className="absolute top-1/4 flex items-center space-x-3 p-4 bg-white rounded-lg shadow-xl"
            ref={searchBarRef}
          >
            <input
              type="text"
              placeholder={placeholder}
              className="input w-full max-w-md focus:ring-2 focus:ring-primary-focus focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={handleSearch}
              className="p-1 rounded-full text-primary"
            >
              <IoSearch size={24} />
            </button>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-full text-primary"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>
      )}
      {!isExpanded && (
        <button
          className="w-10 h-10 ml-4 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer transition duration-300 hover:bg-gray-100"
          onClick={() => setIsExpanded(true)}
        >
          <IoSearch size={24} className="text-gray-600" />
        </button>
      )}
    </div>
  );
}
