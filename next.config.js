/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-subdomain",
            value: "try",
          },
        ],
        destination: "/demo/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
