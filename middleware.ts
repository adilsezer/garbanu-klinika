// middleware.ts is a file that is used to configure the next-intl middleware.
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "@/config/i18nconfig";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: "always",
});

export const config = {
  matcher: [
    // Exclude API routes, Next.js internals, files, and localized 'coming-soon' pages
    "/((?!api|_next|_vercel|en/coming-soon|lt/coming-soon|.*\\..*).*)",
  ],
};
