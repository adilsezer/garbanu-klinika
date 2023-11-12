// LanguageSwitcher.tsx
"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { Locale, localeNames, locales } from "@/config/i18nconfig";

// LanguageSwitcher component to switch between different locales
export default function LanguageSwitcher() {
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
    <div className="flex gap-1 p-2 rounded-lg">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`
            px-4 py-1 font-semibold transition-colors duration-300
            ${locale === loc ? "text-primary bg-quaternary" : "text-primary"}
            rounded-full focus:outline-none hover:text-primary hover:bg-quaternary
          `}
          aria-label={`Switch language to ${localeNames[loc]}`} // for screen readers
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
