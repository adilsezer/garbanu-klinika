"use client";
import SearchBar from "./SearchBar";
import Logo from "../Logo/Logo";
import HamburgerMenu from "./mobile/HamburgerMenu";
import DesktopTopBarIcons from "./desktop/DesktopTopBarIcons";
import MenuLinks from "./desktop/MenuLinks";

export default function TopBar() {
  return (
    <div className="sticky top-0 bg-secondary z-50 pt-1 md:pt-4">
      <div className="flex items-center justify-between mx-2 md:mx-6">
        {/* Each component takes up 1/3 of the space */}
        <div className="flex-1 flex justify-start">
          <SearchBar />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo />
        </div>
        <div className="flex-1 flex justify-end">
          <DesktopTopBarIcons />
          <HamburgerMenu />
        </div>
      </div>
      <MenuLinks />
      <div className="h-px bg-gradient-to-r from-transparent via-primary-focus to-transparent"></div>
    </div>
  );
}
