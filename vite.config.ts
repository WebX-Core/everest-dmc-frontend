import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ command, mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: true,

    proxy: {
      "/api/cache": {
        target: "https://backend.everestdmc.com",
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Origin", "https://everest-dmc-lime.vercel.app");
            proxyReq.setHeader("Referer", "https://everest-dmc-lime.vercel.app/");
          });

          proxy.on("error", (err) => console.log("proxy error", err));
          proxy.on("proxyRes", (proxyRes, req) => {
            console.log("Received:", proxyRes.statusCode, req.url);
          });
        },
      },
      "/api": {
        target: "https://backend.everestdmc.com/api/v1",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Origin", "https://everest-dmc-lime.vercel.app");
            proxyReq.setHeader("Referer", "https://everest-dmc-lime.vercel.app/");
          });

          proxy.on("error", (err) => console.log("proxy error", err));
          proxy.on("proxyRes", (proxyRes, req) => {
            console.log("Received:", proxyRes.statusCode, req.url);
          });
        },
      },
    }

  }

}))