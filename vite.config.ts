import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      constants: "/src/constants",
      routes: "/src/routes",
      store: "/src/store",
      api: "/src/api",
      services: "/src/services",
    },
  },
});
