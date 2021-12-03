import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ChangeEvent, ReactElement, useMemo, useState } from "react";
import { InputOptions } from "@revind/types";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";
import { uid } from "utils/uid";
import { InputLabel, InputLabelProps } from "./InputLabel";
import { ComponentIds } from "utils/component-ids";
import { InputAddonProps } from "./InputAddon";
import { useStyleConfig } from "hooks/useStyleConfig";
import { Text } from "components/Text/Text";
import { Flex } from "components/Flex/Flex";
import { useClasses } from "hooks/useClasses";

export type ReactRevindInputOptions = InputOptions<
    HTMLRevindProps<"div">,
    Partial<InputLabelProps>,
    ReactElement<InputAddonProps>
>;

export type InputProps = Omit<HTMLRevindProps<"input">, "size"> & ReactRevindInputOptions;

export const Input = forwardRef<InputProps, "input">(function TextField(
    {
        variant = "outlined",
        scheme = "primary",
        size = "md",
        margin: isMargin = true,
        "full-width": isFullWidth = false,
        label,
        "label-props": labelProps,
        "wrapper-props": wrapperProps,
        type = "text",
        className = "",
        placeholder = " ",
        "left-addons": leftAddons,
        "right-addons": rightAddons,
        element,
        id,
        onChange,
        error = false,
        styleObj,
        as: Component = "input",
        ...props
    },
    ref,
) {
    const [containsText, setContainsText] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const gid = useMemo(() => id ?? uid(), [id]);

    const {
        default: { start, end },
        conditionals: {
            "full-width": fullWidth,
            margin,
            leftAddon,
            rightAddon,
            allAddon,
            error: errorStyle,
        },
        schemes,
        sizes,
        variants,
        variantInputLabelVariant,
        variantSchemes,
        variantSizes,
        sub: { wrapper, errorText },
        elementSizes,
    } = useStyleConfig("Input", styleObj);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        onChange?.(e);
        setContainsText(!!e.target.value);
    }

    const classes = useClasses(
        start,
        !error && [schemes[scheme], variantSchemes[variant]?.[scheme]],
        sizes[size],
        variants[variant],
        variantSizes[variant]?.[size],
        {
            [fullWidth]: isFullWidth,
            [variantInputLabelVariant[variant][
                labelProps?.variant ?? "material-floating"
            ] ?? ""]: !!label,
            [leftAddon]: !!leftAddons,
            [rightAddon]: !!rightAddons,
            [allAddon]: !!leftAddons && !!rightAddons,
            [elementSizes[size]]: !!element,
            [errorStyle]: !!error,
        },
        end,
        className,
    );

    const wrapperClasses = useClasses(
        wrapper.default.start,
        wrapper.wrapperInputVariant[variant],
        {
            [wrapper.conditionals["full-width"]]: isFullWidth,
        },
        error ? wrapper.conditionals.error : wrapper.schemes[scheme],
        wrapper.default.end,
    );

    return (
        <Flex className={clsx({ [margin]: isMargin })}>
            {leftAddons}
            <div className={wrapperClasses} {...wrapperProps}>
                <div
                    className={clsx(
                        wrapper.wrapperInputLabelVariant[
                            labelProps?.variant ?? "material-floating"
                        ],
                        "relative",
                    )}
                >
                    <Component
                        id={gid}
                        className={classes}
                        {...props}
                        placeholder={placeholder}
                        ref={ref}
                        onChange={handleChange}
                        type={!showPassword ? type : "text"}
                    />
                    {error && (
                        <Text
                            className={clsx(
                                errorText.default.start,
                                errorText.default.end,
                            )}
                            scheme="red"
                            variant="sub2"
                        >
                            {error}
                        </Text>
                    )}
                    {label && (
                        <InputLabel
                            aria-required={props.required}
                            inputVariant={variant}
                            htmlFor={gid}
                            {...labelProps}
                        >
                            {label}
                        </InputLabel>
                    )}
                </div>
                {type === "password" && containsText && (
                    <ShowHidePasswordButton
                        toggle={() => setShowPassword(!showPassword)}
                        active={showPassword}
                    />
                )}
                {type !== "password" && element}
            </div>
            {rightAddons}
        </Flex>
    );
});

Input.id = ComponentIds.Input;

interface ShowHidePasswordButtonProps {
    toggle: VoidFunction;
    active: boolean;
}

function ShowHidePasswordButton({ toggle, active }: ShowHidePasswordButtonProps) {
    const eyeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
        </svg>
    );

    const eyeOffIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
        </svg>
    );
    return (
        <button
            className="focus:outline-none text-gray-500 absolute top-1/2 transform -translate-y-1/2 right-1"
            onClick={toggle}
        >
            {!active ? eyeIcon : eyeOffIcon}
        </button>
    );
}

ShowHidePasswordButton.propTypes = {
    toggle: PropTypes.func,
    active: PropTypes.bool,
};

Input.propTypes = {
    ...Input.propTypes,
    type: PropTypes.oneOf<ReactRevindInputOptions["type"]>([
        "text",
        "email",
        "password",
        "hidden",
        "number",
        "tel",
        "url",
        "datetime",
    ]),
    variant: PropTypes.oneOf<ReactRevindInputOptions["variant"]>([
        "filled",
        "outlined",
        "minimal",
    ]),
    scheme: PropTypes.oneOf<ReactRevindInputOptions["scheme"]>([
        "primary",
        "secondary",
        "red",
        "green",
        "yellow",
    ]),
    size: PropTypes.oneOf<ReactRevindInputOptions["size"]>(["sm", "md", "lg", "xl"]),
    margin: PropTypes.bool,
    "full-width": PropTypes.bool,
    label: PropTypes.string,
    "wrapper-ref": PropTypes.oneOfType<any>([PropTypes.func, PropTypes.object]),
    "label-props": PropTypes.object,
    "left-addon": PropTypes.element,
    "right-addon": PropTypes.element,
    element: PropTypes.element,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
