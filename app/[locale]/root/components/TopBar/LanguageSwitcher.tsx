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
    <div className="flex items-center gap-2 md:mx-6">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`btn ${
            locale === loc ? "bg-quaternary" : "bg-secondary"
          } btn-sm md:btn-sm hover:bg-primary-focus drop-shadow-none`}
          aria-label={`Switch language to ${localeNames[loc]}`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
