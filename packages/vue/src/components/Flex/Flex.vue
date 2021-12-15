<script lang="ts">
    import { defineComponent } from "vue";
    import { useClasses } from "../../hooks/useClasses";
    import { useStyleConfig } from "../../hooks/useStyleConfig";
    import { FlexProps } from "./Flex";

    export default defineComponent({
        name: "RFlex",
        props: {
            direction: { type: String, default: "row" },
            wrap: { type: String, default: "no-wrap" },
            alignItems: { type: String, default: "start" },
            justifyContent: { type: String, default: "start" },
            alignContent: { type: String, default: "start" },
            inline: { type: Boolean, default: false },
            styleObj: Object,
            as: { type: String, default: "div" },
        },
        setup(_props) {
            const props = _props as FlexProps;
            const alignContent = props.alignContent;
            const alignItems = props.alignItems;
            const direction = props.direction;
            const inline = props.inline;
            const justifyContent = props.justifyContent;
            const wrap = props.wrap;
            const styleObj = props.styleObj;

            const flexStyleObj = useStyleConfig("Flex", styleObj);

            const classes = useClasses(
                flexStyleObj.default,
                { [flexStyleObj.inline]: inline },
                flexStyleObj.direction[direction],
                flexStyleObj.wrap[wrap],
                flexStyleObj.alignItems[alignItems],
                flexStyleObj.justifyContent[justifyContent],
                flexStyleObj.alignContent[alignContent],
            );

            return {
                classes,
            };
        },
    });
</script>

<template>
    <component :is="$props.as" :class="classes">
        <slot></slot>
    </component>
</template>
