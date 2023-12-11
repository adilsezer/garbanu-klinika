"use client";
import SearchBar from "./SearchBar";
import Logo from "../../../components/layout/Logo";
import HamburgerMenu from "../MenuLinks/mobile/HamburgerMenu";
import TopBarIcons from "./TopBarIcons";

export default function TopBar() {
  return (
    <div className="sticky top-0 bg-secondary z-50 my-1 md:mt-4">
      <div className="flex items-center justify-between">
        {/* Each component takes up 1/3 of the space */}
        <div className="flex-1 flex justify-start mx-2 md:mx-6">
          <SearchBar />
        </div>
        <div className="flex-1 flex justify-center">
          <Logo />
        </div>
        <div className="flex-1 flex justify-end mx-2 md:mx-6">
          <TopBarIcons />
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
