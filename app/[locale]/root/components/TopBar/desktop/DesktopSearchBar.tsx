import React from "react";
import { IoSearch } from "react-icons/io5";

interface DesktopSearchBarProps {
  placeholder: string;
}

export default function DesktopSearchBar({
  placeholder,
}: DesktopSearchBarProps) {
  return (
    <div className="hidden md:flex w-full max-w-xs lg:max-w-[250px] relative">
      <div className="form-control w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full rounded-full focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ">
          <IoSearch size={20} />
        </div>
      </div>
    </div>
  );
}
