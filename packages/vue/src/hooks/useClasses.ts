import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

export function useClasses(...classes: ClassValue[]) {
    return computed(() => twMerge(clsx(classes)));
}
