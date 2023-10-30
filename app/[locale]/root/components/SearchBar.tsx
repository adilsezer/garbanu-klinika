// components/Search.tsx
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-full w-60">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent pl-4 pr-10 py-2 w-full rounded-full text-sm focus:outline-none"
      />
      <img
        src="/icons/search-icon.svg"
        alt="Search"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
      />
    </div>
  );
};

export default SearchBar;
