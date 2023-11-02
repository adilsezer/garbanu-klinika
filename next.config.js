/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        // Assuming the "Coming Soon" page is at the root
        destination: "/",
        // Only redirect if the path is not already the root
        has: [
          {
            type: "pathname",
            value: "/",
          },
        ],
        permanent: false, // Use false unless you're sure it's a permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
