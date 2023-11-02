// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    if (process.env.VERCEL_ENV === "production") {
      return [
        {
          // Match all routes except for '/en/coming-soon', '/lt/coming-soon', etc.
          source: "/:locale/:path((?!coming-soon).*)",
          destination: "/:locale/coming-soon", // Redirect to localized 'Coming Soon' page
          permanent: false,
          basePath: false,
          locale: false, // Prevent Next.js from prefixing the locale again
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
