// LanguageSwitcher.tsx
"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { Locale, localeNames, locales } from "@/config/i18nconfig";

// LocaleSwitcher component to switch between different locales
const LocaleSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  // Function to handle locale switch and navigate to the current path with the new locale
  const switchLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      // ensure the locale is one of the predefined ones
      router.push(pathName, { locale: newLocale });
    }
  };

  return (
    <div className="flex space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`text-gray-600 hover:text-gray-900 ${
            locale === loc ? "underline" : ""
          }`}
          aria-label={`Switch language to ${localeNames[loc]}`} // for screen readers
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;