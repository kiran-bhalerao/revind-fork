import { Placement } from "@floating-ui/react-dom";
import clsx from "clsx";
import { usePopoverContext } from "context/popover-provider";
import React, { MutableRefObject, useMemo } from "react";
import { forwardRef, HTMLRevindProps } from "utils/forward-ref";
import { mergeRefs } from "utils/refs";

type PopoverContentProps = HTMLRevindProps<"div">;

const PopoverContent = forwardRef<PopoverContentProps, "div">(function PopoverContent(
    props,
    ref,
) {
    const {
        strategy,
        floating,
        placement,
        x,
        y,
        isOpen,
        middlewareData: { arrow },
        arrowRef,
    } = usePopoverContext();

    const stableRef = useMemo(() => mergeRefs(ref, floating), [ref, floating]);
    return (
        <>
            <div
                className="p-5 bg-gray-500 text-white rounded"
                ref={stableRef}
                style={{
                    ...props.style,
                    position: strategy,
                    display: !isOpen ? "none" : "",
                    left: x ? `${x}px` : undefined,
                    top: y ? `${y}px` : undefined,
                    opacity: !isOpen ? 0 : 1,
                }}
            >
                <div className="relative flex flex-col">Popover</div>
                <div
                    ref={arrowRef as MutableRefObject<HTMLDivElement | null>}
                    className={clsx("bg-gray-500 h-3 w-3 transform rotate-45")}
                    style={{
                        position: "absolute",
                        display: !isOpen ? "none" : "block",
                        opacity: !isOpen ? 0 : 1,
                        left:
                            arrow?.x !== undefined && arrow.x !== null
                                ? `${arrow.x}px`
                                : "",
                        top:
                            arrow?.y !== undefined && arrow.y !== null
                                ? `${arrow.y}px`
                                : "",
                        right: "",
                        bottom: "",
                        [placement.split("-")[0]]: "-4px",
                    }}
                />
            </div>
        </>
    );
});

export default PopoverContent;
