"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import BannerButtons from "./BannerButtons"; // Import the new component

export default function HomePageBanner() {
  const t = useTranslations("HomePageBannerButtons");

  const buttons = [
    {
      id: "shop",
      text: t("shop"),
      size: "large" as "small" | "medium" | "large",
    },
    {
      id: "schedule",
      text: t("scheduleAnAppointment"),
      size: "large" as "small" | "medium" | "large",
    },
  ];

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

      <BannerButtons buttons={buttons} />
    </div>
  );
}
