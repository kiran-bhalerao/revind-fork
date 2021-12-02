import type { StackOptions } from "@revind/types";
import clsx from "clsx";
import { useStyleConfig } from "hooks/useStyleConfig";
import React, { useMemo } from "react";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";
import { responsivePropToClass } from "utils/responsivePropToClass";

export type StackProps = HTMLRevindProps<"div"> & StackOptions<React.ReactElement>;

export const Stack = forwardRef<StackProps, "div">(function Stack(
    {
        direction = "column",
        justify = "start",
        items = "start",
        wrap = "no-wrap",
        divider,
        "is-inline": isInline = false,
        styleObj,
        className,
        ...props
    },
    ref,
) {
    const { conditionals, ...styles } = useStyleConfig("Stack", styleObj);

    const classes = useMemo(
        () =>
            clsx(
                styles.default.start,
                responsivePropToClass(styles.direction, direction),
                responsivePropToClass(styles.justifyContent, justify),
                responsivePropToClass(styles.alignItems, items),
                responsivePropToClass(styles.wrap, wrap),
                {
                    [conditionals.inline]: isInline,
                },
                styles.default.end,
                className,
            ),
        [styles, conditionals.inline, direction, justify, items, wrap, isInline],
    );

    return <div ref={ref} className={classes} {...props} />;
});

/**
 * A view that arranges its children in a horizontal line.
 */
export const HStack = forwardRef<StackProps, "div">((props, ref) => (
    <Stack items="center" {...props} direction="row" ref={ref} />
));

/**
 * A view that arranges its children in a vertical line.
 */
export const VStack = forwardRef<StackProps, "div">((props, ref) => (
    <Stack items="center" {...props} direction="column" ref={ref} />
));
