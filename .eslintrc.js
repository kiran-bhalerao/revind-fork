/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "vue", "prettier"],
    settings: {
        react: {
            version: "17.0.0",
        },
    },
    rules: {
        "prettier/prettier": "warn",
        "no-unused-vars": ["warn"],
        "react/no-unescaped-entities": ["off"],
        "vue/first-attribute-linebreak": ["off"],
        "vue/multi-word-component-names": ["off"],
        "vue/one-component-per-file": ["off"],
        "vue/prop-name-casing": ["off"],
    },
    globals: {
        defineProps: "readonly",
    },
};
module.exports = config;
