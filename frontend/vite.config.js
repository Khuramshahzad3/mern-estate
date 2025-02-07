import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",  // Keep this unless you need "./" for relative paths
  server: {
    proxy: {
      "/api": {
        target: "https://mern-estate-api.vercel.app",
        changeOrigin: true,
        secure: true,  // Ensures HTTPS requests
      },
    },
  },
  build: {
    outDir: "dist",  // ✅ Move `outDir` here
  },
});

