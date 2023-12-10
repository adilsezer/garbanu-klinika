import React, { useState, useRef, useCallback } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../TopBar/LanguageSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

interface MenuItem {
  href: string;
  label: string;
}

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("HamburgerMenu");

  // Memoize the callback using useCallback
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []); // Empty dependency array since no dependencies

  useClickOutside<HTMLDivElement>(menuRef, closeMenu);

  const menuItems: MenuItem[] = [
    { href: "/profile", label: t("profile") },
    { href: "/favorites", label: t("favorites") },
    { href: "/cart", label: t("cart") },
    { href: "/store", label: t("store") },
    { href: "/curl-test", label: t("curlTest") },
    { href: "/services", label: t("services") },
    { href: "/registration", label: t("registration") },
    { href: "/about-us", label: t("aboutUs") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <div className="md:hidden" ref={menuRef}>
      <div className="relative flex items-center">
        {/* Hamburger Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="relative mr-4 w-8 h-8 cursor-pointer">
            <RxHamburgerMenu size="auto" />
          </div>
        </button>

        {/* Menu Items */}
        <div
          className={`absolute right-0 top-10 h-auto w-screen transform ${
            isMenuOpen ? "scale-y-100 z-50" : "scale-y-0"
          } origin-top transition-transform duration-500 ease-out bg-secondary shadow-md`}
        >
          {/* Language Switcher */}
          <div className="flex justify-end px-8 my-2">
            <LanguageSwitcher />
          </div>

          {menuItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <div className="text-primary px-8 py-2 w-full font-semibold border-t border-gray-200">
                {item.label}
                {/* Add arrow on the right side */}
                <div className="float-right">
                  <FaArrowRight size="15" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
