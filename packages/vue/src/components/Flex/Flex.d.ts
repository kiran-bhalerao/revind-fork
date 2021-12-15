import { FlexOptions } from "@revind/types";
import { RequiredKey } from "../../types";

export type FlexProps = RequiredKey<
    FlexOptions,
    "alignContent" | "alignItems" | "direction" | "inline" | "justifyContent" | "wrap"
>;
