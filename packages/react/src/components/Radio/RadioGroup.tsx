import { RadioGroupOptions } from "@revind/types";
import { InputLabelProps } from "components/Input/InputLabel";
import { Stack, StackProps } from "components/Stack/Stack";
import React, { FC } from "react";
import { createContext } from "react";
import { ComponentIds } from "utils/component-ids";
import { HTMLRevindProps } from "utils/forward-ref";

const RadioGroupContext = createContext<ReactRevindRadioGroupOptions | null>(null);

export const useRadioGroupContext = () => React.useContext(RadioGroupContext);

export type ReactRevindRadioGroupOptions = RadioGroupOptions<
    HTMLRevindProps<"div">,
    InputLabelProps
>;

export type RadioGroupProps = Omit<
    StackProps,
    "onChange" | "name" | "defaultChecked" | "styleObj"
> &
    ReactRevindRadioGroupOptions;

export const RadioGroup: FC<RadioGroupProps> = ({
    "label-props": labelProps,
    "wrapper-props": wrapperProps,
    scheme,
    size,
    variant,
    children,
    name,
    onChange,
    defaultChecked,
    styleObj,
    value,
    ...props
}) => {
    return (
        <RadioGroupContext.Provider
            value={{
                name,
                "wrapper-props": wrapperProps,
                "label-props": labelProps,
                scheme,
                size,
                variant,
                onChange,
                defaultChecked,
                styleObj,
                value,
            }}
        >
            <Stack {...props}>{children}</Stack>
        </RadioGroupContext.Provider>
    );
};

(RadioGroup as any).id = ComponentIds.RadioGroup;
