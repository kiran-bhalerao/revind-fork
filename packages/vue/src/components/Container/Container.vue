<script lang="ts">
    import { defineComponent } from "vue";
    import { useClasses } from "../../hooks/useClasses";
    import { useStyleConfig } from "../../hooks/useStyleConfig";
    import type { ContainerProps } from "./Container";

    export default defineComponent({
        name: "RContainer",
        props: {
            fixed: { type: Boolean, default: false },
            scheme: { type: String, default: "primary" },
            variant: { type: String, default: "regular" },
            gutters: { type: Boolean, default: false },
            center: { type: Boolean, default: false },
            "max-width": { type: String, default: "lg" },
            elevation: { type: String, default: "md" },
            border: { type: String, default: "sm" },
            rounded: Boolean,
            styleObj: Object,
            as: { type: String, default: "div" },
        },
        setup(_props) {
            const props = _props as ContainerProps;
            const scheme = props.scheme;
            const border = props.border;
            let isRounded = props.rounded;
            const isCenter = props.center;
            const isFixed = props.fixed;
            const isGutters = props.gutters;
            const maxWidth = props["max-width"];
            const elevation = props.elevation;
            const variant = props.variant;
            if (props.scheme === "secondary" && isRounded === undefined) {
                isRounded = true;
            }

            const {
                default: { start, end },
                "max-widths": maxWidths,
                conditionals: { center, fixed, gutters, rounded },
                elevations,
                schemes,
                variantBorders,
                variantElevations,
                variantSchemes,
                variants,
                borders,
            } = useStyleConfig("Container", props.styleObj);
            const classes = useClasses(
                start,
                {
                    [fixed]: isFixed,
                    [center]: isCenter,
                    [gutters]: isGutters,
                    [rounded]: isRounded,
                },
                maxWidth && maxWidths[maxWidth],
                variants[variant],
                schemes[scheme],
                borders[border],
                elevations[elevation],
                variantSchemes?.[variant]?.[scheme],
                variantBorders[variant][border],
                variantElevations[variant][elevation],
                end,
            );

            return { classes };
        },
    });
</script>

<template>
    <component :is="$props.as" :class="classes">
        <slot></slot>
    </component>
</template>
