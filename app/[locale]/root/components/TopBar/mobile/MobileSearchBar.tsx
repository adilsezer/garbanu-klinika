import React, { useState, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import useClickOutside from "@hooks/useClickOutside";

interface MobileSearchBarProps {
  searchLabel: string;
  onSearch: (query: string) => void;
}

export default function MobileSearchBar({
  searchLabel,
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
      <button
        onClick={() => setIsExpanded(true)}
        className="btn btn-square btn-ghost"
      >
        <IoSearch size="24" />
      </button>

      {isExpanded && (
        <div className="modal modal-top modal-open">
          <div className="modal-box relative mx-auto p-5" ref={searchBarRef}>
            <button
              onClick={() => setIsExpanded(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              <IoClose size="24" />
            </button>
            <input
              type="text"
              placeholder={searchLabel}
              className="input input-bordered border-primary-focus w-full max-w-md focus:ring-2 focus:ring-primary-focus focus:outline-none mt-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <div className="modal-action">
              {/* closes the modal */}
              <button className="btn bg-primary-focus" onClick={handleSearch}>
                {searchLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
