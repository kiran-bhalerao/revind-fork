import { ButtonOptions } from "@revind/types";
import { VueRevindProps } from "../../hooks/useStyleConfig";
import { RequiredKey } from "../../types";

export type VueRevindButtonOptions = Omit<
    ButtonOptions<unknown>,
    "start-icon" | "end-icon"
>;

export type ButtonProps = RequiredKey<
    VueRevindButtonOptions,
    "scheme" | "size" | "variant"
> &
    VueRevindProps;
