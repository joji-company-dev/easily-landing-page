const isDevelopment = process.env.NODE_ENV === "development";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_EASILY_BASE_URL ||
  (isDevelopment ? "http://localhost:3000" : "https://easilystoryboard.com")
).replace(/\/$/, "");

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || `${SITE_URL}/api`
).replace(/\/$/, "");

export const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ||
  (isDevelopment ? "http://localhost:3001" : SITE_URL);

export const DASHBOARD_LOGIN_URL = `${DASHBOARD_URL}/login`;
export const DASHBOARD_PROPOSAL_CREATE_URL = `${DASHBOARD_URL}/dashboard/proposal/create`;
