import { uniqueId } from "lodash";
import { useMemo } from "react";

/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */
export function useIds(idProp?: string, ...prefixes: string[]) {
    const id = idProp ?? uniqueId();
    return useMemo(() => {
        return prefixes.map((prefix) => `${prefix}-${id}`);
    }, [id, prefixes]);
}
