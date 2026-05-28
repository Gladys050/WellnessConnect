const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("wc_token");
}

async function request(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...options.headers };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

export const api = {
  auth: {
    login: (email, password) =>
      request("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
    register: (payload) =>
      request("/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  },
  profile: {
    get: () => request("/profile"),
    update: (payload) =>
      request("/profile", { method: "PUT", body: JSON.stringify(payload) }),
  },
  therapists: {
    list: () => request("/therapists"),
    slots: (therapistId, date) =>
      request(`/therapists/${therapistId}/slots?date=${date}`),
  },
  appointments: {
    list: () => request("/appointments"),
    book: (payload) =>
      request("/appointments", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    cancel: (id) => request(`/appointments/${id}/cancel`, { method: "PATCH" }),
  },
  reports: {
    list: () => request("/reports"),
    submit: (payload) =>
      request("/reports", { method: "POST", body: JSON.stringify(payload) }),
    update: (id, p) =>
      request(`/reports/${id}`, { method: "PATCH", body: JSON.stringify(p) }),
  },
  emergency: {
    send: (payload) =>
      request("/emergency", { method: "POST", body: JSON.stringify(payload) }),
    list: () => request("/emergency"),
    resolve: (id) => request(`/emergency/${id}/resolve`, { method: "PATCH" }),
  },
  resources: {
    list: () => request("/resources"),
  },
  admin: {
    stats: () => request("/admin/stats"),
  },
};

export function saveSession(token, user) {
  localStorage.setItem("wc_token", token);
  localStorage.setItem("wc_user", JSON.stringify(user));
}
export function clearSession() {
  localStorage.removeItem("wc_token");
  localStorage.removeItem("wc_user");
}
export function getUser() {
  const u = localStorage.getItem("wc_user");
  return u ? JSON.parse(u) : null;
}
