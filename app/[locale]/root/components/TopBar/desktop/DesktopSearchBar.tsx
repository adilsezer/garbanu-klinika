import React from "react";
import { IoSearch } from "react-icons/io5";

interface DesktopSearchBarProps {
  placeholder: string;
}

export default function DesktopSearchBar({
  placeholder,
}: DesktopSearchBarProps) {
  return (
    <div className="hidden md:flex relative bg-secondary border border-gray-400 rounded-full w-full max-w-xs lg:max-w-[250px]">
      <input
        name="search"
        type="text"
        placeholder={placeholder}
        className="bg-transparent pl-4 pr-10 py-3 w-full rounded-full text-base focus:outline-none"
      />
      <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
        <IoSearch width={20} height={20} />
      </div>
    </div>
  );
}
