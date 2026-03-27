import axios from "axios";

export const api = axios.create({

  baseURL: import.meta.env.VITE_BACKEND_URL,
  // baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

api.interceptors.request.use(async (config) => {
  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }
  return config;
});
