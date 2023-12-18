// ContactSection.tsx
"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import IconLink from "@components/common/IconLink";

const ContactSection: React.FC = () => {
  const t = useTranslations("AboutUs");

  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/garbanuklinika",
      icon: <FaFacebookF size="25" />,
    },
    {
      href: "https://www.instagram.com/garbanuklinika",
      icon: <FaInstagram size="25" />,
    },
    {
      href: "https://www.tiktok.com/@garbanuklinika",
      icon: <FaTiktok size="25" />,
    },
  ];

  return (
    <div className="bg-quaternary p-6 rounded-3xl text-center space-y-8">
      <h3 className="font-bold">{t("aboutUsContactLabel")}</h3>
      <div>
        <Link href={`mailto:${"info@garbanuklinika.lt"}`}>
          {"info@garbanuklinika.lt"}
        </Link>
      </div>
      <div className="flex justify-center gap-6 md:gap-4">
        {socialMediaLinks.map((link, index) => (
          <IconLink key={index} href={link.href} icon={link.icon} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
