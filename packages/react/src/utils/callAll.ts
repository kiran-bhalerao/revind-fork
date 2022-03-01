export function callAll<T extends (event: any) => void>(...fns: (T | undefined)[]) {
    return function func(event: Parameters<T>[0]) {
        fns.some((fn) => {
            fn?.(event);
            return event?.defaultPrevented;
        });
    };
}
