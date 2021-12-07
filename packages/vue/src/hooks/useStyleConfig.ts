import { RevindConfig } from "../services/revind-config/revind-config";
import { mergeExtendStyleObj } from "../utils/mergeExtendStyleObj";
import { computed } from "vue";
import { useRevindConfig } from "./useRevindConfig";

export interface VueRevindProps {}

export type ThemeKeys = keyof RevindConfig["styleObjects"];

export function useStyleConfig<
    S extends Partial<RevindConfig["styleObjects"][ThemeKeys]>,
>(themeKey: ThemeKeys, styleObj?: S): Required<S> {
    const { styleObjects } = useRevindConfig();
    const theme = styleObjects[themeKey] as unknown as Required<S>;
    const { value } = computed(() => {
        if (!styleObj) return theme;
        return mergeExtendStyleObj(styleObj, theme);
    });
    return value;
}
