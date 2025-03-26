import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
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
  ...tseslint.configs.recommended,
  {

    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
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
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-namespace": 0,
    },
  },
);
