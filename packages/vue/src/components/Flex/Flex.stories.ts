import { Meta } from "@storybook/vue3";
import { defineComponent } from "vue";
import { FlexProps } from "./Flex";
import Flex from "./Flex.vue";

export default {
    title: "Components/Flex",
    component: Flex,
    argTypes: {
        direction: {
            options: ["column", "row", "row-reverse", "column-reverse"],
            control: { type: "radio" },
        },
        wrap: {
            control: { type: "radio" },
            options: ["wrap", "no-wrap", "wrap-reverse"],
        },

        justifyContent: {
            control: { type: "radio" },
            options: ["center", "start", "end", "between", "around", "evenly"],
        },

        alignContent: {
            control: { type: "radio" },
            options: ["center", "start", "end", "between", "around", "evenly"],
        },

        alignItems: {
            control: { type: "radio" },
            options: ["center", "start", "end", "stretch", "baseline"],
        },
    },
} as Meta;

export const Default = (args: FlexProps) => {
    return defineComponent({
        setup() {
            return {
                args,
                content: "Lorem x shakalaka boom".repeat(10),
                contentClass: "border border-solid border-black max-w-[100px]",
            };
        },
        template: `
            <RFlex v-bind="args">
              <p :class="contentClass">
                {{content}}
              </p>
              <p :class="contentClass">
                {{content}}
              </p>
              <p :class="contentClass">
                {{content}}
              </p>
              <p :class="contentClass">
                {{content}}
              </p>
              <p :class="contentClass">
                {{content}}
              </p>
            </RFlex>
        `,
    });
};
