import type { StackOptions } from "@revind/types";
import { useClasses } from "hooks/useClasses";
import { useStyleConfig } from "hooks/useStyleConfig";
import React, { useMemo } from "react";
import { ComponentIds } from "utils/component-ids";
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

    const responsivePropToClasses = useMemo(
        () => [
            responsivePropToClass(styles.direction, direction),
            responsivePropToClass(styles.justifyContent, justify),
            responsivePropToClass(styles.alignItems, items),
            responsivePropToClass(styles.wrap, wrap),
        ],
        [styles, direction, justify, items, wrap],
    );

    const classes = useClasses(
        styles.default.start,
        responsivePropToClasses,
        {
            [conditionals.inline]: isInline,
        },
        styles.default.end,
        className,
    );

    return <div ref={ref} className={classes} {...props} />;
});

Stack.id = ComponentIds.Stack;

/**
 * A view that arranges its children in a horizontal line.
 */
export const HStack = forwardRef<StackProps, "div">((props, ref) => (
    <Stack items="center" {...props} direction="row" ref={ref} />
));

HStack.id = ComponentIds.HStack;

/**
 * A view that arranges its children in a vertical line.
 */
export const VStack = forwardRef<StackProps, "div">((props, ref) => (
    <Stack items="center" {...props} direction="column" ref={ref} />
));

VStack.id = ComponentIds.VStack;
