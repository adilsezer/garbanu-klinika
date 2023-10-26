// i18nconfig.ts is a file that is used to configure the next-intl middleware.

export type Locale = "en" | "lt";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "lt"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  lt: "Lietuvių",
};
