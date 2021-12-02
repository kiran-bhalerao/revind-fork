import { InputElementOptions } from "@revind/types";
import clsx from "clsx";
import { useStyleConfig } from "hooks/useStyleConfig";
import React from "react";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";

export type InputElementProps = Omit<HTMLRevindProps<"div">, "size"> &
    InputElementOptions;

export const InputElement = forwardRef<InputElementProps, "div">(function InputElement(
    { styleObj, className, size = "md", ...props },
    ref,
) {
    const styles = useStyleConfig("InputElement", styleObj);

    const classes = clsx(
        styles.default.start,
        styles.sizes[size],
        styles.default.end,
        className,
    );

    return <div {...props} className={classes} ref={ref} />;
});
