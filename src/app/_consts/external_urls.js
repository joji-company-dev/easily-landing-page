import { NEW_SITE_URL, normalizePublicUrl } from "./public_urls";

const isDevelopment = process.env.NODE_ENV === "development";
const LEGACY_API_URLS = new Set(["https://easily-api.jojicompany.com"]);

export const SITE_URL = normalizePublicUrl(
  process.env.NEXT_PUBLIC_EASILY_BASE_URL ||
    (isDevelopment ? "http://localhost:3000" : NEW_SITE_URL)
);

const normalizeApiBaseUrl = (url) => {
  const normalized = (url || `${SITE_URL}/api`).replace(/\/$/, "");

  if (LEGACY_API_URLS.has(normalized)) {
    return `${NEW_SITE_URL}/api`;
  }

  if (normalized === NEW_SITE_URL || normalized === SITE_URL) {
    return `${normalized}/api`;
  }

  return normalized;
};

export const API_BASE_URL = normalizeApiBaseUrl(
  process.env.NEXT_PUBLIC_BASE_URL || `${SITE_URL}/api`
);

export const DASHBOARD_URL = normalizePublicUrl(
  process.env.NEXT_PUBLIC_DASHBOARD_URL ||
    process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL ||
    (isDevelopment ? "http://localhost:3001" : SITE_URL)
);

export const DASHBOARD_HOME_URL = `${DASHBOARD_URL}/dashboard`;
export const DASHBOARD_LOGIN_URL = `${DASHBOARD_URL}/login`;
export const DASHBOARD_PROPOSAL_CREATE_URL = `${DASHBOARD_URL}/dashboard/proposal/create`;
