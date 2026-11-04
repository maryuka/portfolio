import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  // GitHub Pages (https://maryuka.github.io/portfolio/) 用。ローカルでは "/"
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
