export type FlexDirection = "column" | "row" | "row-reverse" | "column-reverse";

export type FlexWrap = "wrap" | "no-wrap" | "wrap-reverse";

export type FlexJustifyContent = "center" | "start" | "end" | "between" | "around" | "evenly";

export type FlexAlignContents = "center" | "start" | "end" | "between" | "around" | "evenly";

export type FlexAlignItems = "center" | "start" | "end" | "stretch" | "baseline";

export interface FlexOptions {
    /**
     * set the direction of the `Flex` container
     * @default row
     */
    direction?: FlexDirection;
    /**
     * wraps the content to new line if set to wrap='wrap' or vice versa
     * if not. wrap-reverse will wrap the content from the opposite site
     * @default no-wrap
     */
    wrap?: FlexWrap;
    /**
     * css `justify-content`
     */
    justifyContent?: FlexJustifyContent;
    /**
     * css `align-content`
     */
    alignContent?: FlexAlignContents;
    /**
     * css `align-items`
     */
    alignItems?: FlexAlignItems;
    /**
     * uses `inline-flex` instead of `flex` as display for `Flex`
     * @default false
     */
    inline?: boolean;

    styleObj?: FlexStyleObj
}

export interface FlexboxDirection {
    readonly row: string;
    readonly column: string;
    readonly "row-reverse": string;
    readonly "column-reverse": string;
}
export interface FlexboxWrap {
    readonly wrap: string;
    readonly "no-wrap": string;
    readonly "wrap-reverse": string;
}

interface FlexboxCoordinateAlignments {
    readonly center: string;
    readonly start: string;
    readonly end: string;
    readonly between: string;
    readonly around: string;
    readonly evenly: string;
    readonly stretch: string;
    readonly baseline: string;
}

export type FlexboxAlign = Omit<FlexboxCoordinateAlignments, "around" | "between" | "evenly">;

export type FlexboxJustify = Omit<FlexboxCoordinateAlignments, "stretch" | "baseline">;

export interface FlexStyleObj {
    readonly default: string;
    readonly direction: FlexboxDirection;
    readonly wrap: FlexboxWrap;
    readonly alignItems: FlexboxAlign;
    readonly justifyContent: FlexboxJustify;
    readonly alignContent: FlexboxJustify;
    readonly inline: string;
}

