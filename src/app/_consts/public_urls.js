export const NEW_SITE_URL = "https://easilystoryboard.com";

const OLD_SITE_URLS = new Set([
  "https://easily.jojicompany.com",
  "https://www.easily.jojicompany.com",
  "https://easily-dashboard.jojicompany.com",
]);

export const normalizePublicUrl = (url, fallback = NEW_SITE_URL) => {
  const normalized = (url || fallback).replace(/\/$/, "");
  return OLD_SITE_URLS.has(normalized) ? NEW_SITE_URL : normalized;
};
