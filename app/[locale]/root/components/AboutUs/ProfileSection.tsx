// ProfileSection.tsx
"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@components/layout/SectionTitle";

const ProfileSection: React.FC = () => {
  const t = useTranslations("AboutUs");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="relative w-full md:w-1/2 h-52 md:h-72 rounded-xl overflow-hidden">
        <Image
          src="/profiles/profile-owner-profile-photo.jpg"
          alt="Curly Hair Woman"
          fill
          className="object-cover"
          objectPosition="left 40%"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col mx-4 md:mx-12">
        <SectionTitle text={t("aboutUsTitle")} className="text-center" />
        <p className="text-primary text-justify">{t("aboutUsText")}</p>
        <button className="btn btn-primary self-center my-6">
          {t("aboutUsReadMoreButton")}
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
