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
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|coming-soon|.*\\..*).*)"],
};
