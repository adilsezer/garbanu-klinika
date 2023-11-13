"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "../../../../components/Logo";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerMenu from "./HamburgerMenu";

export default function TopBar() {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Desktop SearchBar left aligned, Logo centered, Hamburger right aligned */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <SearchBar />
          <Logo />
          {/* Right side icons for desktop */}
          <div className="md:flex md:items-center md:space-x-4">
            <LanguageSwitcher />
            <UserIcon />
            <HeartIcon />
            <CartIcon />
          </div>
        </div>

        {/* Mobile Logo centered in the first row */}
        <div className="flex justify-center m-2 md:hidden">
          <Logo />
        </div>

        {/* Mobile second row with SearchBar left and Hamburger right */}
        <div className="flex justify-between items-center md:hidden">
          <div className="w-2/5">
            <SearchBar />
          </div>
          <LanguageSwitcher />
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
