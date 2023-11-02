// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    // Only redirect in production environment on Vercel
    if (process.env.VERCEL_ENV === "production") {
      return [
        {
          source: "/((?!coming-soon).*)", // match all routes except for '/coming-soon'
          destination: "/coming-soon", // redirect to the 'Coming Soon' page
          permanent: false, // this is not a permanent redirect
          basePath: false, // if you're using a custom basePath, set this to `false`
        },
      ];
    }

    // No redirects in other environments (preview or development on Vercel)
    return [];
  },
};

module.exports = nextConfig;
