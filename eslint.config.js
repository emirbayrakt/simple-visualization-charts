import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
    // Ignore build output
    { ignores: ["dist", "build"] },

    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,

    // React/JSX files
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        settings: { react: { version: "detect" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        extends: [
            react.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Add/override any project-specific rules here
        },
    }
);
