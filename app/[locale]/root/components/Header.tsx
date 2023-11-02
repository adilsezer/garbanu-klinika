// components/Header.tsx
import React from "react";
import MenuLinks from "./MenuLinks"; // Assuming this is the correct path
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import LocaleSwitcher from "./LanguageSwitcher";
import UserIcon from "./UserIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";
import Button from "../../components/Button";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="p-0 m-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side */}
        <SearchBar />

        {/* Center */}
        <Logo />

        {/* Right side */}
        <div className="flex items-center space-x-8">
          <LocaleSwitcher />
          <UserIcon />
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
      {/* Navbar below */}
      <MenuLinks />
      <div className="flex relative w-full">
        <Image
          src="/headers/curly-hair-women-banner.jpg"
          alt="Curly hair women banner"
          className="flex-grow"
          width={1200}
          height={600}
        />
        <div className="absolute top-32 left-24 flex flex-col space-y-24">
          <Button text="PARDUOTUVĖ" />
          <Button text="UŽSIRAŠYMAI VIZITUI" />
        </div>
      </div>
    </div>
  );
};

export default Header;
