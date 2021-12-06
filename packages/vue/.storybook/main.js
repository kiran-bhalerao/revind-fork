const TsChecker = require("vite-plugin-ts-checker").default;

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode/register",
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
    ],
    framework: "@storybook/vue3",
    core: {
        builder: "storybook-builder-vite",
    },
    async viteFinal(config) {
        config.plugins.push(TsChecker({ checker: "vue-tsc" }));
        return config;
    },
};
