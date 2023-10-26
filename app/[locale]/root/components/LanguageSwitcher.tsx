// LanguageSwitcher.tsx is a component that is used in the layout.

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
  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale: Locale = e.target.value as Locale;
    router.push(pathName, { locale: newLocale });
  };

  return (
    <div>
      <select value={locale} onChange={switchLocale}>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSwitcher;
