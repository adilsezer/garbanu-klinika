/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/coming-soon",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
