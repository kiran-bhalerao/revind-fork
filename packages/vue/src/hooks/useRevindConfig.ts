import { inject } from "vue";
import { RevindConfig } from "../services/revind-config/revind-config";
import { REVIND_CONFIG } from "../services/revind-config/revind-config-plugin";

export function useRevindConfig() {
    const injectedConfig = inject(REVIND_CONFIG) as RevindConfig;

    return injectedConfig;
}
