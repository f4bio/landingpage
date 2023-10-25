import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import tailwindcssNesting from "./node_modules/tailwindcss/nesting/index.js";

/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: [autoprefixer, postcssImport, tailwindcssNesting, tailwindcss, cssnano],
};

export default config;
