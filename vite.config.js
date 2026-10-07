import tailwindcss from "@tailwindcss/vite";
import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env["CI"] ? "/landingpage/" : "/",
  plugins: [
    tailwindcss(),
  ],
  build: {
    target: "es2022",
  },
});
