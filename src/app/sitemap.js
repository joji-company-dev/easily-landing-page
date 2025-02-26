const baseUrl = process.env.NEXT_PUBLIC_EASILY_BASE_URL;
export default async function sitemap() {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/post`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
