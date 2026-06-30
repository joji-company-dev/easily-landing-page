/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction
    ? process.env.NEXT_PUBLIC_ASSET_PREFIX || "https://easily.jojicompany.com"
    : undefined,
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
  rewrites: async () => {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/:path*",
          destination: "https://easily-api.jojicompany.com/:path*",
        },
      ];
    } else {
      return [];
    }
  },
};

export default nextConfig;
