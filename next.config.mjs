/** @type {import('next').NextConfig} */
const nextConfig = {
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
