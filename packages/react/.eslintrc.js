const path = require("path");
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    extends: [
        path.join(process.cwd(), "..", "..", ".eslintrc.js"),
        "plugin:react/recommended",
    ],
    settings: {
        react: {
            version: "17.0.0",
        },
    },
    plugins: ["react"],
    rules: {
        "react/no-unescaped-entities": ["off"],
    },
};

module.exports = config;
