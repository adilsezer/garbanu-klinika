// LanguageSwitcher.tsx
"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { Locale, localeNames, locales } from "@/config/i18nconfig";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      router.push(pathName, { locale: newLocale });
    }
  };

  return (
    <div className="flex gap-0.5 md:gap-1 p-2 rounded-lg">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`
            px-3 py-2 font-semibold text-sm transition-colors duration-300
            ${locale === loc ? "bg-quaternary text-primary" : "text-primary"}
            rounded-full focus:outline-none hover:bg-quaternary hover:text-primary md:text-base`}
          aria-label={`Switch language to ${localeNames[loc]}`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
