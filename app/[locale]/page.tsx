// page.tsx represents the main page of the application
// Importing necessary hooks and components
"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./root/components/LanguageSwitcher";
import PromotionalBanner from "./root/components/PromotionalBanner";

// Home component represents the main page of the application
export default function Home() {
  // Using the useTranslations hook to get the translated text based on the current locale
  const t = useTranslations("Index");

  return (
    <div>
      {/* Displaying translated title */}
      <PromotionalBanner />
      <h1>{t("title")}</h1>
      {/* Language switcher component to change the current locale */}
      <LanguageSwitcher />
    </div>
  );
}
