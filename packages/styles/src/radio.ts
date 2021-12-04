import { RadioStyleObject } from "@revind/types";
import { checkboxStyleObj } from "./checkbox";

export const radioStyleObject: RadioStyleObject = {
    default: {
        start: "transition-all rounded-[50%] border border-solid active:ring peer-focus:ring-2 peer-focus:ring-opacity-50 dark:peer-focus:ring-opacity-25 border-gray-600 dark:border-gray-300 bg-gray-100 dark:bg-gray-600 m-1 mb-2",
    },
    variants: {},
    schemes: {
        primary:
            "peer-checked:border-primary dark:peer-checked:border-primary-dark active:ring-primary dark:active:ring-primary-dark peer-focus:ring-primary dark:peer-focus:ring-primary-dark",
        secondary:
            "peer-checked:border-secondary dark:peer-checked:border-secondary-dark active:ring-secondary dark:active:ring-secondary-dark peer-focus:ring-secondary dark:peer-focus:ring-secondary-dark",
        red: "peer-checked:border-red dark:peer-checked:border-red-dark active:ring-red dark:active:ring-red-dark peer-focus:ring-red dark:peer-focus:ring-red-dark",
        green: "peer-checked:border-green dark:peer-checked:border-green-dark active:ring-green dark:active:ring-green-dark peer-focus:ring-green dark:peer-focus:ring-green-dark",
        yellow: "peer-checked:border-yellow dark:peer-checked:border-yellow-dark active:ring-yellow dark:active:ring-yellow-dark peer-focus:ring-yellow dark:peer-focus:ring-yellow-dark",
        blue: "peer-checked:border-blue dark:peer-checked:border-blue-dark active:ring-blue dark:active:ring-blue-dark peer-focus:ring-blue dark:peer-focus:ring-blue-dark",
        cyan: "peer-checked:border-cyan dark:peer-checked:border-cyan-dark active:ring-cyan dark:active:ring-cyan-dark peer-focus:ring-cyan dark:peer-focus:ring-cyan-dark",
        gray: "peer-checked:border-gray dark:peer-checked:border-gray-dark active:ring-gray dark:active:ring-gray-dark peer-focus:ring-gray dark:peer-focus:ring-gray-dark",
        indigo: "peer-checked:border-indigo dark:peer-checked:border-indigo-dark active:ring-indigo dark:active:ring-indigo-dark peer-focus:ring-indigo dark:peer-focus:ring-indigo-dark",
        orange: "peer-checked:border-orange dark:peer-checked:border-orange-dark active:ring-orange dark:active:ring-orange-dark peer-focus:ring-orange dark:peer-focus:ring-orange-dark",
        pink: "peer-checked:border-pink dark:peer-checked:border-pink-dark active:ring-pink dark:active:ring-pink-dark peer-focus:ring-pink dark:peer-focus:ring-pink-dark",
        purple: "peer-checked:border-purple dark:peer-checked:border-purple-dark active:ring-purple dark:active:ring-purple-dark peer-focus:ring-purple dark:peer-focus:ring-purple-dark",
        teal: "peer-checked:border-teal dark:peer-checked:border-teal-dark active:ring-teal dark:active:ring-teal-dark peer-focus:ring-teal dark:peer-focus:ring-teal-dark",
    },
    sizes: {
        sm: "w-3.5 h-3.5 peer-checked:border-4",
        md: "w-4 h-4 peer-checked:border-4",
        lg: "w-[18px] h-[18px] peer-checked:border-[5px]",
        xl: "w-5 h-5 peer-checked:border-[6px]",
        "2xl": "w-6 h-6 peer-checked:border-[6px]",
    },
    variantSchemes: {},
    variantSizes: {},
    sub: {
        label: checkboxStyleObj.sub.label,
        input: checkboxStyleObj.default.start,
        wrapper: {
            default: checkboxStyleObj.sub.wrapper.default,
        },
    },
    conditionals: {
        error: "border-red dark:border-red-dark",
        disabled:
            "border-gray-300 bg-gray-200 dark:bg-gray-200 dark:peer-checked:border-gray-200 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600 peer-checked:border-gray-300 peer-checked:ring-0 active:ring-0 peer-focus:ring-0",
    },
};
