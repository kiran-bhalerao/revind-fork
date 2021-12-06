<script lang="ts">
    import { buttonStyleObj } from "@revind/styles";
    import { useClasses } from "../../hooks/useClasses";
    import { defineComponent } from "vue";
    import { ButtonProps } from "./Button";

    export default defineComponent({
        name: "Button",
        props: {
            "full-width": Boolean,
            margin: Boolean,
            rounded: { type: Boolean, default: true },
            scheme: { type: String, default: "primary" },
            size: { type: String, default: "md" },
            variant: { type: String, default: "filled" },
            styleObj: Object,
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
                sizes,
                variantSchemes,
                variants,
                default: { start, end },
                sub: { startIcon: startIconStyle, endIcon: endIconStyle },
                schemes,
                conditionals: { fullWidth, margin, rounded },
                variantSizes,
            } = buttonStyleObj;

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

            const startIconClasses = [
                startIconStyle.default.start,
                startIconStyle.default.end,
            ];
            const endIconClasses = [endIconStyle.default.start, endIconStyle.default.end];
            return {
                classes,
                startIconClasses,
                endIconClasses,
            };
        },
    });
</script>

<template>
    <button :class="classes">
        <slot name="startIcon" :class="startIconClasses"> </slot>
        <slot></slot>
        <slot name="endIcon" :class="endIconClasses"> </slot>
    </button>
</template>
