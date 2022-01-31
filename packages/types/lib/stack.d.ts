import {
    FlexAlignItems,
    FlexboxAlign,
    FlexboxDirection,
    FlexboxJustify,
    FlexboxWrap,
    FlexDirection,
    FlexJustifyContent,
    FlexWrap,
} from "./flex";
import { Conditionals, DefaultStyles, ResponsiveStyleObj } from "./styles";

export type TailwindCSSSpacing =
    | "0"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "20";

export type StackSpacingCoord<C extends "x" | "y" = "x" | "y"> = `${
    | "sm:"
    | "md:"
    | "lg:"
    | "xl:"
    | "2xl:"
    | ""}space-${C}-${TailwindCSSSpacing}`;

export type ResponsiveObject<T> = Record<
    "sm" | "md" | "lg" | "xl" | "2xl",
    T | null | undefined
>;
export type ResponsiveTuple<T> = [T | null, T | null, T | null, T | null, T | null];

export type ResponsiveValue<T> = T | ResponsiveTuple<T> | ResponsiveObject<T>;

export interface StackOptions<I> {
    /**
     * Shorthand for `alignItems` style prop
     */
    items?: ResponsiveValue<FlexAlignItems>;
    /**
     * Shorthand for `justifyContent` style prop
     */
    justify?: ResponsiveValue<FlexJustifyContent>;
    /**
     * Shorthand for `flexWrap` style prop
     */
    wrap?: ResponsiveValue<FlexWrap>;
    /**
     * The direction to stack the items.
     */
    direction?: ResponsiveValue<FlexDirection>;
    divider?: I;
    /**
     * If `true` the items will be stacked horizontally.
     */
    "is-inline"?: boolean;
    "spacing-horizontal"?: StackSpacingCoord<"x">[] | string;
    "spacing-vertical"?: StackSpacingCoord<"y">[] | string;
    styleObj?: StackStyleObj;
}

export interface StackStyleObj extends Conditionals<"inline"> {
    readonly default: DefaultStyles;
    readonly direction: ResponsiveStyleObj<FlexboxDirection>;
    readonly wrap: ResponsiveStyleObj<FlexboxWrap>;
    readonly alignItems: ResponsiveStyleObj<FlexboxAlign>;
    readonly justifyContent: ResponsiveStyleObj<FlexboxJustify>;
}
