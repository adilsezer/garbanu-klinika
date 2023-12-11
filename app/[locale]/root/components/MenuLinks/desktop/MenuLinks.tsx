"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MenuLinks() {
  const t = useTranslations("MenuLinks");
  const links = [
    { label: t("store"), href: "/store" },
    { label: t("curlTest"), href: "/curl-test" },
    { label: t("services"), href: "/services" },
    { label: t("registration"), href: "/registration" },
    { label: t("aboutUs"), href: "/about-us" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <>
      {/* Full navigation menu for larger screens */}
      <nav className="hidden md:block md:my-6 " aria-label="Main navigation">
        <ul className="container mx-auto flex items-center justify-center space-x-20">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-primary hover:text-quaternary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
