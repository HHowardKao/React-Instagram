import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/React-Instagram/",
  build: {
    target: "es2015", // 確保支援較舊的瀏覽器
  },
});
