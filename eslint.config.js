import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig([
  {
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
  },

  // ====================
  // Ignore
  // ====================
  globalIgnores(["**/dist/**", "**/build/**", "**/coverage/**", "**/.vite/**"]),

  // ====================
  // App (React + TS)
  // ====================
  {
    files: ["src/**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,

      // TypeScript
      tseslint.configs.recommendedTypeChecked,

      // React
      reactHooks.configs.flat.recommended,
      reactDom.configs.recommended,

      // Prettier
      prettier,
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.es2024,
      },

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      // ====================
      // Import sort
      // ====================
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // ====================
      // TypeScript unused
      // ====================
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // ====================
      // Type import
      // ====================
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      // ====================
      // Console
      // ====================
      "no-console": [
        isProd ? "error" : "warn",
        {
          allow: ["warn", "error"],
        },
      ],
    },
  },

  // ====================
  // Node (config files)
  // ====================
  {
    files: ["**/*.config.{js,ts}"],

    extends: [js.configs.recommended, tseslint.configs.recommended],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-console": "off",
    },
  },
]);
