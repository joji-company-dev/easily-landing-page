/** @type {import('next').NextConfig} */
const NEW_SITE_URL = "https://easilystoryboard.com";
const OLD_SITE_HOSTS = ["easily.jojicompany.com", "www.easily.jojicompany.com"];
const OLD_SITE_URLS = [
  ...OLD_SITE_HOSTS.map((host) => `https://${host}`),
  "https://easily-dashboard.jojicompany.com",
];
const normalizePublicUrl = (url) => {
  const normalized = (url || NEW_SITE_URL).replace(/\/$/, "");
  return OLD_SITE_URLS.includes(normalized) ? NEW_SITE_URL : normalized;
};
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProduction
    ? normalizePublicUrl(process.env.NEXT_PUBLIC_ASSET_PREFIX)
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
  redirects: async () => {
    return OLD_SITE_HOSTS.map((host) => ({
      source: "/:path((?!_next/).*)",
      has: [
        {
          type: "host",
          value: host,
        },
      ],
      missing: [
        {
          type: "header",
          key: "x-easily-origin-router",
          value: "1",
        },
      ],
      destination: `${NEW_SITE_URL}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
