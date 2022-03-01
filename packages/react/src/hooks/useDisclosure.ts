/**
 * @author chakra-ui <https://chakra-ui.com>
 * ALL CREDITS FOR `Portal` GOES TO chakra-ui
 * Thanks, to chakra-ui for making such a great library
 */

import { useState, useCallback } from "react";
import { useCallbackRef } from "./useCallbackRef";

export function useControllableProp<T>(prop: T | undefined, state: T) {
    const isControlled = prop !== undefined;
    const value = isControlled && typeof prop !== "undefined" ? prop : state;
    return [isControlled, value] as const;
}

export interface UseDisclosureProps {
    isOpen?: boolean;
    defaultIsOpen?: boolean;
    onClose?(): void;
    onOpen?(): void;
    id?: string;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
    const { onClose: onCloseProp, onOpen: onOpenProp, isOpen: isOpenProp, id } = props;

    const onOpenPropCallbackRef = useCallbackRef(onOpenProp);
    const onClosePropCallbackRef = useCallbackRef(onCloseProp);
    const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false);
    const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);

    const onClose = useCallback(() => {
        if (!isControlled) {
            setIsOpen(false);
        }
        onClosePropCallbackRef?.();
    }, [isControlled, onClosePropCallbackRef]);

    const onOpen = useCallback(() => {
        if (!isControlled) {
            setIsOpen(true);
        }
        onOpenPropCallbackRef?.();
    }, [isControlled, onOpenPropCallbackRef]);

    const onToggle = useCallback(() => {
        const action = isOpen ? onClose : onOpen;
        action();
    }, [isOpen, onOpen, onClose]);

    return {
        isOpen: !!isOpen,
        onOpen,
        onClose,
        onToggle,
        isControlled,
        getButtonProps: (props: any = {}) => ({
            ...props,
            "aria-expanded": "true",
            "aria-controls": id,
            onClick() {
                props.onClick();
                onToggle();
            },
        }),
        getDisclosureProps: (props: any = {}) => ({
            ...props,
            hidden: !isOpen,
            id,
        }),
    };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
