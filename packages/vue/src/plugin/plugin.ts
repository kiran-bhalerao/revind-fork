import { RevindConfig } from "../services/revind-config/revind-config";
import { RevindConfigPlugin } from "../services/revind-config/revind-config-plugin";
import { Plugin } from "vue";
import * as componentMap from "./components";

export const RevindPlugin: Plugin = {
    install(app, config?: RevindConfig) {
        for (const [name, component] of Object.entries(componentMap)) {
            app.component(component.name, component);
        }

        app.use(RevindConfigPlugin, config);
    },
};

export const RevindComponentLessPlugin: Plugin = {
    install(app, config?: RevindConfig) {
        app.use(RevindConfigPlugin, config);
    },
};
