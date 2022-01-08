import { ButtonGroupOptions } from "@revind/types";
import { RequiredKey } from "../../types";

export type ButtonGroupProps = RequiredKey<
    ButtonGroupOptions<unknown>,
    "scheme" | "size" | "variant" | "full-width" | "direction"
>;
