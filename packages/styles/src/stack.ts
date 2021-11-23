import { StackStyleObj } from "@revind/types";
import { flexStyleObj } from "./flex";

export const stackStyleObj: StackStyleObj = {
  default: {
    start: "flex"
  },
  alignItems: {
    all: flexStyleObj.alignItems,
    sm: {
      center: "sm:items-center",
      start: "sm:items-start",
      end: "sm:items-end",
      stretch: "sm:items-stretch",
      baseline: "sm:items-baseline",
    },
    md: {
      center: "md:items-center",
      start: "md:items-start",
      end: "md:items-end",
      stretch: "md:items-stretch",
      baseline: "md:items-baseline",
    },
    lg: {
      center: "lg:items-center",
      start: "lg:items-start",
      end: "lg:items-end",
      stretch: "lg:items-stretch",
      baseline: "lg:items-baseline",
    },
    xl: {
      center: "xl:items-center",
      start: "xl:items-start",
      end: "xl:items-end",
      stretch: "xl:items-stretch",
      baseline: "xl:items-baseline",
    },
    "2xl": {
      center: "2xl:items-center",
      start: "2xl:items-start",
      end: "2xl:items-end",
      stretch: "2xl:items-stretch",
      baseline: "2xl:items-baseline",
    },
  },
  justifyContent: {
    all: flexStyleObj.justifyContent,
    sm: {
      center: "sm:justify-center",
      start: "sm:justify-start",
      end: "sm:justify-end",
      between: "sm:justify-between",
      around: "sm:justify-around",
      evenly: "sm:justify-around",
    },
    md: {
      center: "md:justify-center",
      start: "md:justify-start",
      end: "md:justify-end",
      between: "md:justify-between",
      around: "md:justify-around",
      evenly: "md:justify-around",
    },
    lg: {
      center: "lg:justify-center",
      start: "lg:justify-start",
      end: "lg:justify-end",
      between: "lg:justify-between",
      around: "lg:justify-around",
      evenly: "lg:justify-around",
    },
    xl: {
      center: "xl:justify-center",
      start: "xl:justify-start",
      end: "xl:justify-end",
      between: "xl:justify-between",
      around: "xl:justify-around",
      evenly: "xl:justify-around",
    },
    "2xl": {
      center: "2xl:justify-center",
      start: "2xl:justify-start",
      end: "2xl:justify-end",
      between: "2xl:justify-between",
      around: "2xl:justify-around",
      evenly: "2xl:justify-around",
    }
  },
  direction: {
    all: flexStyleObj.direction,
    sm: {
      row: "sm:flex-row",
      column: "sm:flex-col",
      "row-reverse": "sm:flex-row-reverse",
      "column-reverse": "sm:flex-col-reverse",
    },
    md: {
      row: "md:flex-row",
      column: "md:flex-col",
      "row-reverse": "md:flex-row-reverse",
      "column-reverse": "md:flex-col-reverse",
    },
    lg: {
      row: "lg:flex-row",
      column: "lg:flex-col",
      "row-reverse": "lg:flex-row-reverse",
      "column-reverse": "lg:flex-col-reverse",
    },
    xl: {
      row: "xl:flex-row",
      column: "xl:flex-col",
      "row-reverse": "xl:flex-row-reverse",
      "column-reverse": "xl:flex-col-reverse",
    },
    "2xl": {
      row: "2xl:flex-row",
      column: "2xl:flex-col",
      "row-reverse": "2xl:flex-row-reverse",
      "column-reverse": "2xl:flex-col-reverse",
    }
  },
  wrap: {
    all: flexStyleObj.wrap,
    sm: {
      wrap: "sm:flex-wrap",
      "no-wrap": "sm:flex-nowrap",
      "wrap-reverse": "sm:wrap-reverse",
    },
    md: {
      wrap: "md:flex-wrap",
      "no-wrap": "md:flex-nowrap",
      "wrap-reverse": "md:wrap-reverse",
    },
    lg: {
      wrap: "lg:flex-wrap",
      "no-wrap": "lg:flex-nowrap",
      "wrap-reverse": "lg:wrap-reverse",
    },
    xl: {
      wrap: "xl:flex-wrap",
      "no-wrap": "xl:flex-nowrap",
      "wrap-reverse": "xl:wrap-reverse",
    },
    "2xl": {
      wrap: "2xl:flex-wrap",
      "no-wrap": "2xl:flex-nowrap",
      "wrap-reverse": "2xl:wrap-reverse",
    }
  },
  conditionals: {
    inline: "inline-flex",
  },
}