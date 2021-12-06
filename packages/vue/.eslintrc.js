const path = require("path");
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: [
        path.join(process.cwd(), "..", "..", ".eslintrc.js"),
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    settings: {
        vue: {
            version: "3.2.23",
        },
    },
    plugins: ["vue"],
    rules: {
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
