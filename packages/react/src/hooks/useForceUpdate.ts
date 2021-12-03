/**
 * @author chakra-ui <https://chakra-ui.com>
 * ALL CREDITS FOR `useForceUpdate` GOES TO chakra-ui
 * Thanks, to chakra-ui for making such a great library
 */

import React, { useEffect } from "react";

export function useForceUpdate() {
    const unloadingRef = React.useRef(false);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        return () => {
            unloadingRef.current = true;
        };
    });

    return React.useCallback(() => {
        if (!unloadingRef.current) {
            setCount(count + 1);
        }
    }, [count]);
}
