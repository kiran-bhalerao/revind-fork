<script lang="ts">
    import { useClasses } from "../../hooks/useClasses";
    import { defineComponent } from "vue";
    import { useStyleConfig, VueRevindProps } from "../../hooks/useStyleConfig";
    import { ButtonOptions } from "@revind/types";
    import { RequiredKey } from "../../types";

    export type VueRevindButtonOptions = Omit<
        ButtonOptions<unknown>,
        "start-icon" | "end-icon"
    >;

    export type ButtonProps = RequiredKey<
        VueRevindButtonOptions,
        "scheme" | "size" | "variant"
    > &
        VueRevindProps;

    export default defineComponent({
        name: "RButton",
        props: {
            "full-width": Boolean,
            margin: Boolean,
            rounded: { type: Boolean, default: true },
            scheme: { type: String, default: "primary" },
            size: { type: String, default: "md" },
            variant: { type: String, default: "filled" },
            styleObj: Object,
            as: { type: String, default: "button" },
        },
        setup(_props) {
            const props = _props as ButtonProps;
            const isFullWidth = props["full-width"] ?? false;
            const isMargin = props.margin ?? false;
            const isRounded = props.rounded ?? true;
            const scheme = props.scheme;
            const size = props.size;
            const variant = props.variant;
            const styleObj = props.styleObj;

            const {
                default: { start, end },
                sizes,
                variantSchemes,
                variants,
                schemes,
                variantSizes,
                sub: { startIcon, endIcon },
                conditionals: { fullWidth, margin, rounded },
            } = useStyleConfig("Button", styleObj);

            const classes = useClasses(
                start,
                variants[variant],
                sizes[size],
                schemes[scheme],
                variantSizes?.[variant]?.[size],
                variantSchemes?.[variant]?.[scheme],
                {
                    [margin]: isMargin,
                    [fullWidth]: isFullWidth,
                    [rounded]: isRounded,
                },
                end,
            );

            const startIconClasses = [startIcon.default.start, startIcon.default.end];
            const endIconClasses = [endIcon.default.start, endIcon.default.end];
            return {
                classes,
                startIconClasses,
                endIconClasses,
            };
        },
    });
</script>

<template>
    <component :is="$props.as" :class="classes">
        <slot name="startIcon" :class="startIconClasses"> </slot>
        <slot></slot>
        <slot name="endIcon" :class="endIconClasses"> </slot>
    </component>
</template>
