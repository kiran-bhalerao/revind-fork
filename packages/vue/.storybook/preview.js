import { app } from "@storybook/vue3";
import { RevindPlugin } from "../src/plugin/plugin";
import "../src/index.css";

app.use(RevindPlugin);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
