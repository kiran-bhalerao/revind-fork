import { ButtonOptions } from "@revind/types";
import { RequiredKey } from "types";

export type ButtonProps = RequiredKey<
    Omit<ButtonOptions<unknown>, "start-icon" | "end-icon">,
    "scheme" | "size" | "variant"
>;
