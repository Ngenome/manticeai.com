// constants/urls.ts

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
const API_URL = `${BACKEND_URL}/api`;

export const URLS = {
  //  auth endpoints
  auth: {
    login: `${API_URL}/v1/auth/login/`,
    register: `${API_URL}/v1/auth/register/`,
    googleAuth: `${API_URL}/v1/auth/login/google/`,
    logout: `${API_URL}/v1/auth/logout/`,
    verifyEmail: `${API_URL}/v1/auth/verify-email/`,
    resendVerification: `${API_URL}/v1/auth/verify-email/resend/`,
    requestPasswordReset: `${API_URL}/v1/auth/password/reset/`,
    confirmPasswordReset: `${API_URL}/v1/auth/password/reset/confirm/`,
    changePassword: `${API_URL}/v1/auth/password/change/`,
    profile: `${API_URL}/v1/auth/profile/`,
  },

  // New payments endpoints
  payments: {
    balance: `${API_URL}/v1/payments/balance/`,
    purchase: `${API_URL}/v1/payments/credits/purchase/`,
    verify: `${API_URL}/v1/payments/credits/verify/`,
    history: `${API_URL}/v1/payments/credits/history/`,
    webhook: `${API_URL}/v1/payments/webhook/`,
  },

  // Tools endpoints
  tools: {
    detail: (toolId: string) => `${API_URL}/v1/tools/tools/${toolId}/`,
    list: `${API_URL}/v1/tools/tools/`,
    execute: (toolId: string) => `${API_URL}/v1/tools/tools/${toolId}/execute/`,
    history: `${API_URL}/v1/tools/executions/`,
  },
} as const;

export default URLS;
