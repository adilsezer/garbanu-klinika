// components/MenuLinks.tsx
"use client";
import { useTranslations } from "next-intl";
import React from "react";

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
    <nav className="p-8">
      <div className="container mx-auto flex items-center justify-center">
        {" "}
        {/* Modified justify-between to justify-center */}
        <div className="hidden md:flex space-x-20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary hover:text-quaternary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
