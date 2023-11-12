"use client";

import Image from "next/image";
import Button from "../../../../components/Button";
import { useTranslations } from "next-intl";

export default function HomePageBanner() {
  const t = useTranslations("HomePageBannerButtons");
  return (
    <div className="relative w-full h-[550px]">
      {" "}
      {/* Container with relative positioning and specific height */}
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Curly hair women banner"
        fill
        quality={100}
        className="w-full h-auto object-cover"
        priority
      />
      <div className="absolute top-1/4 left-12 flex flex-col space-y-20">
        {" "}
        {/* Vertically centered buttons */}
        <Button text={t("shop")} size="large" />
        <Button text={t("scheduleAnAppointment")} size="large" />
      </div>
    </div>
  );
}
