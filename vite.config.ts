import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL, // https://backend.everestdmc.com/api/v1
          changeOrigin: true,
          secure: false,
          // Remove "/api" before sending the request to the backend
          rewrite: (p) => p.replace(/^\/api/, ""),
        },
      },
    },
  };
});
