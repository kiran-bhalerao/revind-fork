<script lang="ts">
    import { defineComponent } from "vue";
    import { useStyleConfig } from "../../hooks/useStyleConfig";
    import { ButtonGroupProps } from "./ButtonGroup";
    import Flex from "../Flex/Flex.vue";
    import clsx from "clsx";

    export default defineComponent({
        name: "RButtonGroup",
        components: { Flex },
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
            const direction = props.direction;
            const scheme = props.scheme;
            const size = props.size;
            const variant = props.variant;
            const styleObj = props.styleObj;

            const {
                borderColors,
                directions,
                variantDirections,
                default: { start, end },
            } = useStyleConfig("ButtonGroup", styleObj);

            return {
                classes: clsx(
                    start,
                    directions[direction],
                    variantDirections[variant]?.[direction],
                    borderColors?.[scheme],
                    end,
                ),
                scheme,
                size,
                variant,
            };
        },
    });
</script>

<template>
    <Flex
        role="group"
        align-items="stretch"
        :as="$props.as"
        :inline="!$props['full-width']"
        :direction="$props.direction"
    >
        <slot
            :class="classes"
            :size="size"
            :variant="variant"
            :scheme="scheme"
            :rounded="false"
            :margin="false"
        ></slot>
    </Flex>
</template>
