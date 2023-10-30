// i18nconfig.ts is a file that is used to configure the next-intl middleware.

export type Locale = "lt" | "en";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["lt", "en"];

export const localeNames: Record<Locale, string> = {
  lt: "LT",
  en: "EN",
};
