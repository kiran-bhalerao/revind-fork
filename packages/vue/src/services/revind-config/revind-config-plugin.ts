import { merge } from "lodash-es";
import { Plugin } from "vue";
import { revindConfig, RevindConfig } from "./revind-config";
import { mergeExtendStyleObj } from "../../utils/mergeExtendStyleObj";

export const REVIND_CONFIG = "revind-config";

export const RevindConfigPlugin: Plugin = {
    install(app, config?: RevindConfig) {
        app.provide<RevindConfig>(
            REVIND_CONFIG,
            config
                ? {
                      styleObjects: mergeExtendStyleObj(
                          config.styleObjects,
                          revindConfig.styleObjects,
                      ),
                      props: merge({}, config.props, revindConfig.props),
                  }
                : revindConfig,
        );
    },
};
