"use client";
import Image from "next/image";
import Button from "../../../../components/Button";
import { useTranslations } from "next-intl";

// Define the type for the button object
type ButtonType = {
  key: string;
  text: string;
  size: "small" | "medium" | "large";
};

export default function HomePageBanner() {
  const t = useTranslations("HomePageBannerButtons");

  // Define buttons with the ButtonType
  const buttons: ButtonType[] = [
    { key: "shop", text: t("shop"), size: "large" },
    { key: "schedule", text: t("scheduleAnAppointment"), size: "large" },
  ];

  return (
    <div className="relative w-full h-72 md:h-[550px]">
      {/* Responsive container */}
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Curly hair women banner"
        fill
        quality={100}
        className="w-full h-auto object-cover object-[80%_center]"
        priority
      />
      <div className="absolute bottom-4 md:bottom-auto md:top-24 left-2 md:left-16 flex flex-row justify-center md:justify-start md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-10 w-full md:w-auto">
        {buttons.map(({ key, text, size }) => (
          <Button key={key} text={text} size={size} />
        ))}
      </div>
    </div>
  );
}
