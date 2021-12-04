import { RadioOptions } from "@revind/types";
import { useClasses } from "hooks/useClasses";
import { InputLabel as RadioLabel, InputLabelProps } from "components/Input/InputLabel";
import React from "react";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";
import { useStyleConfig } from "hooks/useStyleConfig";
import { uid } from "utils/uid";
import { Text } from "components/Text/Text";
import { useRadioGroupContext } from "main";

export type ReactRevindRadioOptions = RadioOptions<
    HTMLRevindProps<"div">,
    InputLabelProps
>;

export type RadioProps = Omit<HTMLRevindProps<"input">, "type" | "size"> &
    ReactRevindRadioOptions;

export const Radio = forwardRef<RadioProps, "input">(function Radio(
    { className, variant, label, error = false, ...props },
    ref,
) {
    const context = useRadioGroupContext();

    const scheme = props.scheme ?? context?.scheme ?? "primary";
    const styleObj = props.styleObj ?? context?.styleObj;
    const labelProps = props["label-props"] ?? context?.["label-props"];
    const wrapperProps = props["wrapper-props"] ?? context?.["wrapper-props"];
    const size = props.size ?? context?.size ?? "md";
    const defaultChecked =
        props.defaultChecked ?? !!(context?.defaultChecked === props.value);

    const checked =
        props.checked ??
        (context?.value ? !!(context?.value === props.value) : undefined);
    const name = props.name ?? context?.name;

    const {
        default: { start, end },
        schemes,
        variants = {},
        sizes,
        sub: { label: labelStyle, input, wrapper },
        conditionals,
    } = useStyleConfig("Radio", styleObj);

    const classes = useClasses(
        start,
        schemes[scheme],
        (variants as any)[variant as keyof typeof variants],
        sizes[size],
        { [conditionals.error]: error },
        { [conditionals.disabled]: props.disabled },
        end,
        className,
    );
    const wrapperClasses = useClasses(
        wrapper?.default.start,
        wrapper?.default.end,
        wrapperProps?.className,
    );
    const id = props.id ?? uid();

    const freshProps = {
        ...props,
        scheme: undefined,
        styleObj: undefined,
        "label-props": undefined,
        "wrapper-props": undefined,
        size: undefined,
        onChange: undefined,
        defaultChecked,
        checked,
        name,
    };

    return (
        <div {...wrapperProps} className={wrapperClasses}>
            <input
                type="radio"
                className={input}
                ref={ref}
                {...freshProps}
                id={id}
                onChange={(e) => {
                    e.target.checked && context?.onChange?.(props.value);
                    props.onChange?.(e);
                }}
            />
            <label className={classes} htmlFor={id} />
            <RadioLabel
                {...labelProps}
                inputVariant="filled"
                htmlFor={id}
                styleObj={{
                    ...labelStyle,
                    ...labelProps?.styleObj,
                }}
                variant={labelProps?.variant ?? "left"}
            >
                <Text>{label}</Text>
            </RadioLabel>
        </div>
    );
});
