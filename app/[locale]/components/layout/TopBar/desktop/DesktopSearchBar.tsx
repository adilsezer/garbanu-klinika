import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface DesktopSearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void; // Adding the onSearch prop
}

export default function DesktopSearchBar({
  placeholder,
  onSearch,
}: DesktopSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the input value

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery); // Invoke the onSearch prop callback
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="hidden md:flex w-full md:max-w-[250px] relative">
      <div className="form-control w-full">
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full rounded-full focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handleKeyPress} // Handling Enter key press
        />
        <div
          className="absolute inset-y-0 right-2 flex items-center pr-3 cursor-pointer"
          onClick={handleSearch} // Handling click on the search icon
        >
          <IoSearch size={20} />
        </div>
      </div>
    </div>
  );
}
