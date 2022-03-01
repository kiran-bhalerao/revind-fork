import { ComputePositionConfig, offset } from "@floating-ui/core";
import { shift, useFloating, arrow, flip } from "@floating-ui/react-dom";
import { PopoverOptions } from "@revind/types";
import { PopoverProvider } from "context/popover-provider";
import { useDisclosure } from "hooks/useDisclosure";
import React, { RefObject, useEffect, useRef } from "react";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";

export interface FocusableElement {
    focus(options?: FocusOptions): void;
}

export type PopoverProps = HTMLRevindProps<"div"> &
    PopoverOptions<RefObject<FocusableElement>> &
    Omit<Partial<ComputePositionConfig>, "platform" | "middleware">;

const Popover = forwardRef<PopoverProps, "div">(function Popover(props, ref) {
    const {
        closeOnBlur = true,
        closeOnEsc = true,
        initialFocusRef,
        id,
        returnFocusOnClose = true,
        autoFocus = true,
        arrowSize,
        arrowShadowColor,
        trigger = "click",
        openDelay = 200,
        closeDelay = 200,
        isLazy,
        lazyBehavior = "unmount",
        computePositionOnMount,
        children,
        ...popperProps
    } = props;
    const { isOpen, onClose, onOpen, ...disclosureProps } = useDisclosure(props);

    const arrowRef = useRef<HTMLElement>(null);

    const hasBeenOpened = useRef(false);
    if (isOpen) {
        hasBeenOpened.current = true;
    }

    const { strategy, refs, placement, x, y, update, ...floatingProps } = useFloating({
        ...popperProps,
        placement: "top",
        strategy: "absolute",
        middleware: [
            offset({ mainAxis: 5, crossAxis: 5 }),
            flip(),
            shift({ padding: 10 }),
            arrow({ element: arrowRef }),
        ],
    });

    useEffect(() => {
        // for updating the initial incorrect values
        update();
    }, []);

    return (
        <PopoverProvider
            value={{
                arrowShadowColor,
                arrowSize,
                autoFocus,
                closeDelay,
                closeOnBlur,
                closeOnEsc,
                computePositionOnMount,
                id,
                initialFocusRef,
                isLazy,
                isOpen,
                lazyBehavior,
                onClose,
                onOpen,
                openDelay,
                returnFocusOnClose,
                trigger,
                strategy,
                refs,
                placement,
                x,
                y,
                update,
                arrowRef,
                ...disclosureProps,
                ...floatingProps,
            }}
        >
            {children}
        </PopoverProvider>
    );
});

export default Popover;
