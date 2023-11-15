"use client";
import SearchBar from "./SearchBar";
import Logo from "../../../../components/Logo";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerMenu from "../MenuLinks/HamburgerMenu";

export default function TopBar() {
  return (
    <div className="container mx-auto mt-4 px-0 lg:px-8">
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
        <div className="md:hidden">
          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="flex justify-between w-full">
            {/* SearchBar on the left */}
            <div className="flex-1">
              <SearchBar />
            </div>

            {/* LanguageSwitcher in the center */}
            <div className="flex-1 flex justify-center">
              <LanguageSwitcher />
            </div>

            {/* HamburgerMenu on the right */}
            <div className="flex-1 flex justify-end">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
