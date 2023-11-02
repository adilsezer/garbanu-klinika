// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    if (process.env.VERCEL_ENV === "production") {
      return [
        {
          // Only redirect if the URL doesn't point to a static file (i.e., no file extension present)
          source: "/:locale/:path*",
          destination: "/:locale/coming-soon",
          permanent: false,
          locale: false,
          has: [
            {
              type: "host",
              value: "garbanu-klinika.vercel.app",
            },
          ],
          // Exclude static files and the coming-soon page itself from redirects
          check: true,
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
