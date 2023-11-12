"use client";

import SearchBar from "./SearchBar";
import Logo from "../../../../components/Logo";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container mx-auto flex items-center justify-between">
      {/* Left side */}
      <SearchBar />
      {/* Center */}
      <Logo />
      {/* Right side */}
      <nav>
        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-px bg-black mb-1"></div>
          <div className="w-6 h-px bg-black mb-1"></div>
          <div className="w-6 h-px bg-black"></div>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-4`}
        >
          <LanguageSwitcher />
          <UserIcon />
          <HeartIcon />
          <CartIcon />
        </div>
      </nav>
    </div>
  );
}
