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
      <button className="btn btn-primary hover:bg-primary-focus hover:border-primary-focus absolute bottom-4 md:top-1/3 md:transform -translate-y-1/2 md:left-20 px-20">
        {t("shop")}
      </button>
      <button className="btn btn-secondary absolute bottom-4 md:top-1/2 md:transform -translate-y-1/2 md:left-20 px-20">
        {t("scheduleAnAppointment")}
      </button>
    </div>
  );
}
