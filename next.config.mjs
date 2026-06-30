/** @type {import('next').NextConfig} */
const NEW_SITE_URL = "https://easilystoryboard.com";
const OLD_SITE_HOSTS = ["easily.jojicompany.com", "www.easily.jojicompany.com"];

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
  redirects: async () => {
    return OLD_SITE_HOSTS.map((host) => ({
      source: "/:path*",
      has: [
        {
          type: "host",
          value: host,
        },
      ],
      destination: `${NEW_SITE_URL}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
