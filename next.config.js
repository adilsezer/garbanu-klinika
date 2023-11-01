// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    if (process.env.VERCEL_ENV === "production") {
      return [
        {
          source: "/((?!coming-soon).*)",
          destination: "/coming-soon",
        },
      ];
    }
    // No rewrites are needed for non-production environments
    return [];
  },
};

module.exports = nextConfig;
