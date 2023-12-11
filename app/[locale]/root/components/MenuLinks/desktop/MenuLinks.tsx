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
      <nav className="navbar hidden md:flex mt-2" aria-label="Main navigation">
        <div className="flex justify-center w-full">
          <ul className="menu menu-horizontal p-0">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-primary transition-colors duration-200 hover:bg-primary-focus"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
