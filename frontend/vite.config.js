import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()],
  base: "/",  // Change to "./" only if needed
  server: {
    proxy: {
      "/api": {
        target: "https://mern-estate-api.vercel.app",
        changeOrigin: true,
        secure: true,  // Set to true for HTTPS
      },
    },
    build: {
      outDir: "dist",
    },
  },
});
