import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
  },
});
