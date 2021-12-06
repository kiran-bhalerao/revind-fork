/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:prettier/recommended", "eslint:recommended"],
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
    },
};
module.exports = config;
