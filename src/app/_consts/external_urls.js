const isDevelopment = process.env.NODE_ENV === "development";

export const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ||
  (isDevelopment
    ? "http://localhost:3001"
    : "https://easily-dashboard.jojicompany.com");

export const DASHBOARD_LOGIN_URL = `${DASHBOARD_URL}/login`;
export const DASHBOARD_PROPOSAL_CREATE_URL = `${DASHBOARD_URL}/dashboard/proposal/create`;
