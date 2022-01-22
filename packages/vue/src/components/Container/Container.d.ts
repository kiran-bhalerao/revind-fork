import { ContainerOptions } from "@revind/types";
import { RequiredKey } from "../../types";

export type ContainerProps = RequiredKey<
    ContainerOptions,
    | "fixed"
    | "scheme"
    | "variant"
    | "gutters"
    | "center"
    | "max-width"
    | "elevation"
    | "border"
> &
    ContainerOptions;
