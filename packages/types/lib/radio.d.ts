import { BaseStyleObj, Conditionals, Schemes, Sizes, SubComponents } from "./styles";

export interface RadioOptions<W, L> {
    variant?: unknown;
    checked?: boolean;
    scheme?: keyof Schemes;
    "wrapper-props"?: W;
    size?: keyof Omit<Sizes, "xs">;
    label?: string;
    "label-props"?: L;
    styleObj?: Partial<RadioStyleObject>;
    error?: boolean;
}

export type RadioStyleObject = BaseStyleObj<unknown> &
    SubComponents<{
        label: Pick<BaseStyleObj, "default">;
        input?: string;
        wrapper?: Pick<BaseStyleObj, "default">;
    }> &
    Conditionals<"error">;

export interface RadioGroupOptions<W, L>
    extends Omit<RadioOptions<W, L>, "checked" | "label" | "styleObj"> {
    name?: string;
    onChange?(selectedValue?: string | number | readonly string[]): void;
    defaultChecked?: string;
    styleObj?: Partial<RadioStyleObject>;
    value?: string | number | readonly string[];
}
