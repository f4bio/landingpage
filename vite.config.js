import tailwindcss from "@tailwindcss/vite";
import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { webfontDownload } from "vite-plugin-webfont-dl";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: process.env["CI"] ? "/landingpage" : "/",
  resolve: {
    alias: {
      "#root": resolve(__dirname),
      "#illustration": resolve(__dirname, "assets", "illustrations"),
      "#picture": resolve(__dirname, "assets", "pictures"),
      "#background": resolve(__dirname, "components", "backgrounds"),
      "#component": resolve(__dirname, "components"),
      "#database": resolve(__dirname, "database", "drizzle"),
      "#layout": resolve(__dirname, "layouts"),
    },
  },
  plugins: [
    tailwindcss(),
    webfontDownload(),
  ],
  build: {
    target: "es2022",
  },
});
