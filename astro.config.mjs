import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kenjihilasak.github.io",
  integrations: [sitemap()],
  output: "static",
  redirects: {
    "/research": "/work/align-and-shine/",
    "/about": "/",
  },
  build: {
    format: "directory",
  },
});
