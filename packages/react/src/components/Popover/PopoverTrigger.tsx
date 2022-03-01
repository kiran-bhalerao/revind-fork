import { usePopoverContext } from "context/popover-provider";
import { Button } from "components/Button/Button";
import React, { useEffect, useMemo, useRef } from "react";
import { callAll } from "utils/callAll";
import { contains, getRelatedTarget } from "utils/dom";
import { forwardRef } from "utils/forward-ref";
import { mergeRefs } from "utils/refs";

const PopoverTrigger = forwardRef<object, "button">(function PopoverTrigger(
    { as, children, ...props },
    ref,
) {
    const {
        onOpen,
        onClose,
        closeOnBlur,
        onToggle,
        isOpen,
        id,
        trigger,
        refs,
        reference,
        openDelay,
        closeDelay,
    } = usePopoverContext();
    const isHoveringRef = useRef(false);
    const openTimeout = useRef<number>();
    const closeTimeout = useRef<number>();

    useEffect(() => {
        return () => {
            if (openTimeout.current) {
                clearTimeout(openTimeout.current);
            }
            if (closeTimeout.current) {
                clearTimeout(closeTimeout.current);
            }
        };
    }, []);

    const triggerProps = useMemo(() => {
        if (trigger === "click") {
            return { onClick: callAll(props.onClick, onToggle) };
        } else {
            return {
                onFocus: callAll(props.onFocus, onOpen),
                onBlur: callAll(props.onBlur, (event) => {
                    const relatedTarget = getRelatedTarget(event);
                    const isValidBlur = !contains(refs.floating.current, relatedTarget);

                    if (isOpen && closeOnBlur && isValidBlur) {
                        onClose();
                    }
                }),
                onKeyDown: callAll(props.onKeyDown, (event) => {
                    if (event.key === "Escape") {
                        onClose();
                    }
                }),
                onMouseEnter: callAll(props.onMouseEnter, () => {
                    isHoveringRef.current = true;
                    openTimeout.current = window.setTimeout(onOpen, openDelay);
                }),
                onMouseLeave: callAll(props.onMouseLeave, () => {
                    isHoveringRef.current = false;

                    if (openTimeout.current) {
                        clearTimeout(openTimeout.current);
                        openTimeout.current = undefined;
                    }

                    closeTimeout.current = window.setTimeout(() => {
                        if (isHoveringRef.current === false) {
                            onClose();
                        }
                    }, closeDelay);
                }),
            };
        }
    }, [
        trigger,
        refs.floating,
        isOpen,
        closeOnBlur,
        isHoveringRef,
        openTimeout,
        closeTimeout,
    ]);

    const Component = as ?? Button;

    const stableRef = useMemo(() => mergeRefs(ref, reference), [ref, reference]);

    return (
        <Component
            {...props}
            {...triggerProps}
            ref={stableRef}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls={id}
        >
            {children}
        </Component>
    );
});

export default PopoverTrigger;
