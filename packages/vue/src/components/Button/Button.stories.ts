import { Meta } from "@storybook/vue3";
import { defineComponent } from "vue";
import { ButtonProps } from "./Button";
import Button from "./Button.vue";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["filled", "outlined", "minimal"],
            control: { type: "radio" },
        },
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl", "2xl"],
            control: { type: "radio" },
        },
        disabled: { type: "boolean" },
    },
} as Meta;

export const Default = (args: ButtonProps) => {
    return defineComponent({
        setup() {
            return { args };
        },
        template: `
        <div class="flex justify-around">
            <div class="flex flex-col items-center space-y-2">
                <h5>Default</h5>
                <RButton v-bind="args">
                  Hello
                </RButton>
            </div>
            <div class="flex flex-col items-center space-y-2">
                <h5>Left Icon</h5>
                <RButton v-bind="args">
                    <template #startIcon>&times;</template>
                    Hello
                </RButton>
            </div>
            <div class="flex flex-col items-center space-y-2">
                <h5>Right Icon</h5>
                <RButton v-bind="args">
                    Hello
                    <template #endIcon>&times;</template>
                </RButton>
            </div>
            <div class="flex flex-col items-center space-y-2">
                <h5>Both Side Icon</h5>
                <RButton is="a" v-bind="args">
                    <template #startIcon>&times;</template>
                    Hello
                    <template #endIcon>&times;</template>
                </RButton>
            </div>
        </div>
        `,
    });
};
