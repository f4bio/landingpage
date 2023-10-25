import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "./node_modules/tailwindcss/nesting/index.js";
import purgecss from "@fullhuman/postcss-purgecss";

/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: [
    autoprefixer,
    postcssImport,
    tailwindcssNesting,
    tailwindcss,
    purgecss({
      content: ["./src/index.html"],
    }),
  ],
};

export default config;
