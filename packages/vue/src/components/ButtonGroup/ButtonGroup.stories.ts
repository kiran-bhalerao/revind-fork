import { Meta } from "@storybook/vue3";
import { defineComponent } from "vue";
import { ButtonGroupProps } from "./ButtonGroup";
import ButtonGroup from "./ButtonGroup.vue";

export default {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
    args: {
        "full-width": false,
    },
    argTypes: {
        direction: { control: { type: "radio" }, options: ["row", "column"] },
        size: { control: { type: "radio" }, options: ["sm", "md", "lg", "xl", "2xl"] },
        variant: {
            control: { type: "select" },
            options: ["filled", "outlined", "minimal"],
        },
        scheme: {
            control: { type: "select" },
            options: ["primary", "secondary", "red", "green", "yellow"],
        },
    },
} as Meta<ButtonGroupProps>;

export const Default = (args: ButtonGroupProps) => {
    return defineComponent({
        setup() {
            return { args };
        },
        template: `
      <RButtonGroup v-bind="args" v-slot:default="propName">
        <RButton v-bind="propName">Button 1</RButton>
        <RButton v-bind="propName">Button 2</RButton>
        <RButton v-bind="propName">Button 3</RButton>
      </RButtonGroup>
      `,
    });
};
