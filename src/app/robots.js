import { normalizePublicUrl } from "./_consts/public_urls";

export default function robots() {
  const baseUrl = normalizePublicUrl(process.env.NEXT_PUBLIC_EASILY_BASE_URL);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
