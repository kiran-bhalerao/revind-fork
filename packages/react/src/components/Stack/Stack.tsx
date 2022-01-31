import type {
    FlexDirection,
    FlexWrap,
    ResponsiveObject,
    ResponsiveValue,
    ResponsiveTuple,
    StackOptions,
    StackSpacingCoord,
} from "@revind/types";
import { useClasses } from "hooks/useClasses";
import { useStyleConfig } from "hooks/useStyleConfig";
import React, { useMemo } from "react";
import { ComponentIds } from "utils/component-ids";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";
import { responsivePropToClass } from "utils/responsivePropToClass";

export type StackProps = HTMLRevindProps<"div"> & StackOptions<React.ReactElement>;

function filterSpacingByBreakPoint(spacing: string, breakpoint: string) {
    return spacing.split(" ").filter((s) => s.includes(breakpoint));
}

function responsivePropToObj<T>(value: ResponsiveValue<T>): ResponsiveObject<T> {
    const indexToBreakpointMap = {
        0: "sm",
        1: "md",
        2: "lg",
        3: "xl",
        4: "2xl",
    };

    if (typeof value == "object" && !Array.isArray(value))
        return value as ResponsiveObject<T>;
    return Object.values(indexToBreakpointMap).reduce((acc, val, index) => {
        Object.assign(acc, {
            [val]:
                typeof value == "string" ? value : (value as ResponsiveTuple<T>)[index],
        });
        return acc;
    }, {}) as ResponsiveObject<T>;
}
function mapProperSpacingWithDirection(
    horizontalSpacing: StackSpacingCoord<"x">[] | string,
    verticalSpacing: StackSpacingCoord<"y">[] | string,
    wrap: ResponsiveValue<FlexWrap>,
    direction: ResponsiveValue<FlexDirection>,
): string | (string | undefined | null)[] | undefined {
    const hSpaceStr = Array.isArray(horizontalSpacing)
        ? horizontalSpacing.join(" ")
        : horizontalSpacing;
    const vSpaceStr = Array.isArray(verticalSpacing)
        ? verticalSpacing.join(" ")
        : verticalSpacing;
    if (typeof wrap == "string" && wrap !== "no-wrap") {
        return [hSpaceStr, vSpaceStr];
    } else if (typeof direction == "string") {
        return direction.includes("row") ? hSpaceStr : vSpaceStr;
    } else {
        const dirObj = responsivePropToObj(direction);
        const wrapObj = responsivePropToObj(wrap);
        return Object.entries(dirObj)
            .map(([key, dir]) => {
                let spacing0: [string, string];
                switch (key) {
                    case "sm":
                        spacing0 = ["sm:spacing-x-0", "sm:spacing-y-0"];
                    case "md":
                        spacing0 = ["md:spacing-x-0", "md:spacing-y-0"];
                    case "lg":
                        spacing0 = ["lg:spacing-x-0", "lg:spacing-y-0"];
                    case "xl":
                        spacing0 = ["xl:spacing-x-0", "xl:spacing-y-0"];
                    default:
                        spacing0 = ["2xl:spacing-x-0", "2xl:spacing-y-0"];
                }

                const wrapVal = wrapObj[key as keyof ResponsiveObject<FlexWrap>];

                return dir?.includes("row")
                    ? [hSpaceStr, spacing0[1]]
                    : wrapVal && wrapVal !== "no-wrap"
                    ? [
                          ...filterSpacingByBreakPoint(hSpaceStr, key),
                          ...filterSpacingByBreakPoint(vSpaceStr, key),
                      ]
                    : [vSpaceStr, spacing0[0]];
            })
            .flat(1);
    }
}

export const Stack = forwardRef<StackProps, "div">(function Stack(
    {
        direction = "column",
        justify = "start",
        items = "start",
        wrap = "no-wrap",
        divider,
        "is-inline": isInline = false,
        styleObj,
        "spacing-horizontal": horizontalSpacing,
        "spacing-vertical": verticalSpacing,
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

    const spacingClasses = useMemo(
        () =>
            mapProperSpacingWithDirection(
                horizontalSpacing ?? [],
                verticalSpacing ?? [],
                wrap,
                direction,
            ),
        [direction, verticalSpacing, horizontalSpacing, wrap],
    );

    const classes = useClasses(
        styles.default.start,
        responsivePropToClasses,
        {
            [conditionals.inline]: isInline,
        },
        spacingClasses,
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
