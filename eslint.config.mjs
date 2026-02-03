import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: ["prettier"],           // نضيف Prettier plugin
    extends: ["plugin:prettier/recommended"], // يخلي ESLint يطبق Prettier
    rules: {
      "prettier/prettier": "error",  // أي خطأ Prettier يعتبر خطأ ESLint
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

