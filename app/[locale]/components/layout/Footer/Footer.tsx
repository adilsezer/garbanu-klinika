// Import React and Next.js components
"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Define the structure for your footer items
interface FooterItem {
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const t = useTranslations("FooterMenu");
  const footerItems: FooterItem[] = [
    { href: "/deliver-and-returns", label: t("deliveryAndReturns") },
    { href: "/contacts", label: t("contacts") },
    { href: "/rules-and-conditions", label: t("rulesAndConditions") },
    { href: "/privacy-policy", label: t("privacyPolicy") },
  ];

  return (
    <footer className="footer footer-center bg-primary text-secondary p-10 rounded">
      <nav className="flex flex-row gap-4">
        {footerItems.map((item) => (
          <Link key={item.href} href={item.href} className="link link-hover">
            {item.label}
          </Link>
        ))}
      </nav>
      <aside className="mt-4 text-center">
        <p>{t("copyRight")}</p>
      </aside>
    </footer>
  );
};

export default Footer;
