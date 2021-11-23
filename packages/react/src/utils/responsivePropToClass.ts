import type { ResponsiveValue } from "@revind/types";
import type { ResponsiveStyleObj } from "@revind/types/lib/styles";

export function responsivePropToClass<U extends Object>(
  obj: ResponsiveStyleObj<U>,
  value: ResponsiveValue<keyof U>,
) {
  return Array.isArray(value)
    ? [
      value[0] && obj.sm[value[0]],
      value[1] && obj.md[value[1]],
      value[2] && obj.lg[value[2]],
      value[3] && obj.xl[value[3]],
      value[4] && obj.sm[value[4]],
    ]
    : !Array.isArray(value) && typeof value === "object"
      ? [
        value.sm && obj.sm[value.sm],
        value.md && obj.md[value.md],
        value.lg && obj.lg[value.lg],
        value.xl && obj.xl[value.xl],
        value["2xl"] && obj.sm[value["2xl"]],
      ]
      : typeof value === "string" && obj.all[value];
}
