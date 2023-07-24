/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const redirects = [];

    redirects.push({
      source: `/polarbear`,
      destination: `https://localphoto-assets.s3.us-east-2.amazonaws.com/demo/photos/waving.jpg`,
      permanent: true,
    });

    return redirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2g3wyw4vlq6n.cloudfront.net",
        port: "",
        pathname: "/demo/**",
      },
    ],
  },
};

module.exports = nextConfig;
