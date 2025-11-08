import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig([
  ...nextVitals,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    // Ignora archivos de build y configs
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "dist/**",
      "next-env.d.ts",
      "tailwind.config.*",
      "postcss.config.*",
      "eslint.config.js",
    ],

    plugins: {
      "react-hooks": reactHooks,
      tailwindcss,
    },

    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },

    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx"],
        config: "tailwind.config.ts",
        cssFiles: ["**/*.css"],
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,

      // Tailwind y React
      "tailwindcss/no-custom-classname": "off",
      "react/react-in-jsx-scope": "off",

      // TypeScript
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-unused-vars": "off",

      // Estilo
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
    },
  },
  {
    // Overrides para archivos de configuración JS (tailwind, next, etc.)
    files: [
      "tailwind.config.{js,ts,mjs,cjs}",
      "next.config.{js,ts,mjs,cjs}",
      "postcss.config.{js,ts,mjs,cjs}",
    ],
    languageOptions: {
      parserOptions: {
        project: null, // Evita errores de tsconfig
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
]);
