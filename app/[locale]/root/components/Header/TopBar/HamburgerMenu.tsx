import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface MenuItem {
  href: string;
  label: string;
}

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("HamburgerMenu");

  const menuItems: MenuItem[] = [
    { href: "/profile", label: t("profile") },
    { href: "/favorites", label: t("favorites") },
    { href: "/cart", label: t("cart") },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative md:hidden z-50" ref={menuRef}>
      <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="relative w-8 h-8 cursor-pointer">
          <Image src="/icons/hamburger-menu.svg" alt="Hamburger" fill />
        </div>
      </button>

      <div
        className={`absolute right-0 mt-4 transform ${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        } origin-top transition-transform duration-500 ease-out bg-secondary shadow-md rounded-md`}
      >
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="text-primary px-4 py-2 w-full font-semibold border-t border-gray-200">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
