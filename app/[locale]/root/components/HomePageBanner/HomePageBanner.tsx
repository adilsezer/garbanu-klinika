"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HomePageBanner() {
  const t = useTranslations("HomePageBannerButtons");

  return (
    <div className="relative w-full h-72 md:h-[550px]">
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Curly hair women banner"
        fill
        quality={75}
        className="w-full h-auto object-cover object-[80%_center]"
        priority
      />
      <button className="btn btn-secondary hover:bg-tertiary absolute top-[30%] left-4 md:left-20 w-40 md:w-60 px-8">
        {t("shop")}
      </button>
      <button className="btn btn-secondary hover:bg-tertiary absolute top-[50%] left-4 md:left-20 w-40 md:w-60 px-8">
        {t("scheduleAnAppointment")}
      </button>
    </div>
  );
}
