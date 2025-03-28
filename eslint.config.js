import globals from "globals";
import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true,
      },
    },
  },
  {
    ignores: [
      "dist/*",
      // Temporary compiled files
      "**/*.ts.build-*.mjs",
      "*.svg",
    ],
  },
  eslint.configs.recommended,
  stylistic.configs.recommended,
  {
    rules: {
      // "no-unused-vars": "error",
      // "no-undef": "error",
      "@stylistic/max-len": [
        "error",
        {
          code: 80,
          ignoreUrls: true,
          ignoreComments: true,
        },
      ],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: false,
          },
          multilineDetection: "brackets",
        },
      ],
      "@stylistic/object-property-newline": ["error"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
    },
  },
]);

// export default
//   {
//
//     languageOptions: {
//       parserOptions: {
//         warnOnUnsupportedTypeScriptVersion: false,
//         sourceType: "module",
//         ecmaVersion: "latest",
//       },
//     },
//   },
