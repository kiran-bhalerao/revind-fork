import { ComputePositionReturn, VirtualElement } from "@floating-ui/core";
import { PopoverOptions } from "@revind/types";
import { FocusableElement } from "components/Popover/Popover";
import { UseDisclosureReturn } from "hooks/useDisclosure";
import { MutableRefObject, RefObject } from "react";
import { createContext } from "utils/create-context";

type Data = Omit<ComputePositionReturn, "x" | "y"> & {
    x: number | null;
    y: number | null;
};
export type UseFloatingReturn = Data & {
    update: () => void;
    reference: (node: Element | VirtualElement | null) => void;
    floating: (node: HTMLElement | null) => void;
    refs: {
        reference: MutableRefObject<Element | null>;
        floating: MutableRefObject<HTMLElement | null>;
    };
};

export type PopoverContext = PopoverOptions<RefObject<FocusableElement>> &
    UseFloatingReturn &
    UseDisclosureReturn & {
        arrowRef?: RefObject<HTMLElement>;
    };

const [PopoverProvider, usePopoverContext, popoverContext] =
    createContext<PopoverContext>({
        name: "PopoverContext",
    });

export { PopoverProvider, usePopoverContext, popoverContext };
