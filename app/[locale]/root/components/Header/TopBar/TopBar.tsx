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
    // Sticky position to keep the TopBar at the top when scrolling
    <div className="sticky top-0 bg-secondary z-50 md:py-2">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <SearchBar />
            <Logo />
            <div className="md:flex md:items-center md:space-x-4">
              <LanguageSwitcher />
              <UserIcon />
              <HeartIcon />
              <CartIcon />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex justify-between w-full">
              <div className="flex-1">
                <SearchBar />
              </div>
              <div className="flex-1 flex justify-center">
                <Logo />
              </div>
              <div className="flex-1 flex justify-end">
                <HamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
