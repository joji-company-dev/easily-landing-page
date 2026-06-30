export default function robots() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_EASILY_BASE_URL || "https://easily.jojicompany.com"
  ).replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
