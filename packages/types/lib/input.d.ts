import { ContainerSizes } from "./container";
import { InputLabelVariants } from "./input-label";
import {
    BaseStyleObj,
    Conditionals,
    Logical,
    Schemes,
    Sizes,
    SubComponents,
    VariantJunctions,
    Variants,
} from "./styles";

type InputSizes = ContainerSizes;

export interface InputOptions<W, L, A> {
    type?:
        | "text"
        | "email"
        | "password"
        | "hidden"
        | "number"
        | "tel"
        | "url"
        | "datetime";
    variant?: keyof Variants;
    scheme?: keyof Schemes;
    size?: keyof InputSizes;
    "left-addons"?: A;
    "right-addons"?: A;
    element?: A;
    "full-width"?: boolean;
    margin?: boolean;
    label?: string;
    "label-props"?: L;
    "wrapper-props"?: W;
    error?: false | string;
    styleObj?: InputStyleObj;
}

export interface InputSubComponents {
    wrapper: Pick<BaseStyleObj, "default" | "schemes"> &
        Conditionals<"full-width" | "error"> & {
            wrapperInputLabelVariant: InputLabelVariants;
            wrapperInputVariant: Variants;
        };
    errorText: Pick<BaseStyleObj, "default">;
}

export type InputStyleObj = BaseStyleObj & {
    variantInputLabelVariant: VariantJunctions<InputLabelVariants>;
} & Conditionals<
        "full-width" | "margin" | "leftAddon" | "rightAddon" | "allAddon" | "error"
    > &
    SubComponents<InputSubComponents> & {
        elementSizes: Record<keyof InputSizes, string>;
    };
