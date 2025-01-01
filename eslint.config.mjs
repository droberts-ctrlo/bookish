import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { settings: { react: { version: "detect" } } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["node_modules", "dist", "cypress", "webpack.config.js", "jest.config.js", "cypress.config.ts", "app.cjs", "eslint.config.mjs"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/indent": ["error", 4],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    }
  }
];
