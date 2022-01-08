<script lang="ts">
    import { defineComponent } from "vue";
    import { useStyleConfig } from "../../hooks/useStyleConfig";
    import { ButtonGroupProps } from "./ButtonGroup";

    export default defineComponent({
        name: "RButtonGroup",
        props: {
            "full-width": {
                type: Boolean,
                default: false,
            },
            direction: {
                type: String,
                default: "row",
            },
            size: {
                type: String,
                default: "md",
            },
            variant: {
                type: String,
                default: "filled",
            },
            scheme: {
                type: String,
                default: "primary",
            },
            styleObj: Object,
            as: { type: String, default: "div" },
        },
        setup(_props) {
            const props = _props as ButtonGroupProps;
            const isFullWidth = props["full-width"] ?? false;
            const scheme = props.scheme;
            const size = props.size;
            const variant = props.variant;
            const styleObj = props.styleObj;

            const {} = useStyleConfig("ButtonGroup", styleObj);
        },
    });
</script>

<template></template>
