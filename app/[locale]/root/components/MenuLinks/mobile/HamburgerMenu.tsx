import React, { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside"; // Import the hook
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../TopBar/LanguageSwitcher";
import { FaBars, FaTimes } from "react-icons/fa";

type MenuItem = {
  href: string;
  label: string;
};

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal
  const t = useTranslations("HamburgerMenu");

  // Close menu function
  const closeMenu = () => setIsMenuOpen(false);

  // Use the hook to close the modal when clicking outside
  useClickOutside(modalRef, closeMenu);

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
    <div className="md:hidden relative">
      <button
        onClick={() => setIsMenuOpen((o) => !o)}
        className="btn btn-square btn-ghost"
      >
        <FaBars size="24" />
      </button>

      {isMenuOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative" ref={modalRef}>
            <button
              onClick={closeMenu}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              <FaTimes size="24" />
            </button>

            <div className="flex justify-end pt-8">
              <LanguageSwitcher />
            </div>

            <div className="menu p-4 overflow-y-auto w-full h-full">
              {menuItems.map(({ href, label }, index) => (
                <div
                  key={href}
                  className={`${
                    index !== 0 ? "border-t border-primary-focus" : ""
                  }`}
                >
                  <Link
                    href={href}
                    className="block py-3 px-5 text-lg text-center hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
