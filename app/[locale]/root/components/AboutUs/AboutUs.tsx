"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutUs: React.FC = () => {
  const t = useTranslations("AboutUs");
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between my-6 md:my-12 rounded-lg">
        <div className="relative w-full h-48 md:h-72 mb-4 md:mb-0">
          <Image
            src="/profiles/profile-owner-profile-photo.jpg"
            alt="Curly Hair Woman"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="mx-4 md:mx-12 my-4">
          <div className="flex justify-center items-start mb-4">
            <h2 className="text-xl md:text-2xl font-bold">
              {t("aboutUsTitle")}
            </h2>
          </div>
          <p className="text-primary text-justify text-sm md:text-base">
            {t("aboutUsText")}
          </p>
          <div className="flex justify-center mt-4 md:mt-8">
            <button className="btn btn-primary text-sm md:text-base">
              {t("aboutUsReadMoreButton")}
            </button>
          </div>
        </div>
        <div className="text-center bg-quaternary p-8 md:p-12 rounded-3xl space-y-8 my-4">
          <h3 className="font-bold">{t("aboutUsContactLabel")}</h3>
          <Link href={`mailto:${"info@garbanuklinika.lt"}`} className="block">
            {"info@garbanuklinika.lt"}
          </Link>
          <div className="flex justify-center gap-2 md:gap-4">
            <Link href="https://www.facebook.com" className="text-blue-600">
              <FaFacebookF size="24" />
            </Link>
            <Link href="https://www.instagram.com" className="text-pink-600">
              <FaInstagram size="24" />
            </Link>
            <Link href="https://www.tiktok.com" className="text-black">
              <FaTiktok size="24" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
