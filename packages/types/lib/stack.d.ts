import { FlexAlignItems, FlexboxAlign, FlexboxDirection, FlexboxJustify, FlexboxWrap, FlexDirection, FlexJustifyContent, FlexWrap } from "./flex"
import { Conditionals, DefaultStyles, ResponsiveStyleObj } from "./styles"

export type TailwindCSSSpacing = "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20";

export type ResponsiveValue<T> = T | [T | null | undefined, T | null | undefined, T | null | undefined, T | null | undefined, T | null | undefined] | Record<"sm" | "md" | "lg" | "xl" | "2xl", T | null | undefined>

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
   * The space between each stack item
   */
  spacing?: ResponsiveValue<TailwindCSSSpacing>;
  /**
   * The direction to stack the items.
   */
  direction?: ResponsiveValue<FlexDirection>;
  divider?: I;
  /**
   * If `true` the items will be stacked horizontally.
   */
  "is-inline"?: boolean;
  styleObj?: StackStyleObj;
}

export interface StackStyleObj extends Conditionals<"inline"> {
  readonly default: DefaultStyles
  readonly direction: ResponsiveStyleObj<FlexboxDirection>;
  readonly wrap: ResponsiveStyleObj<FlexboxWrap>;
  readonly alignItems: ResponsiveStyleObj<FlexboxAlign>;
  readonly justifyContent: ResponsiveStyleObj<FlexboxJustify>;
}