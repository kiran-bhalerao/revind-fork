import { useMemo } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function useClasses(...classes: ClassValue[]): string {
    return useMemo(() => twMerge(clsx(classes)), classes);
}
