import { Meta } from "@storybook/vue3";
import { defineComponent } from "vue";
import { ContainerProps } from "./Container";
import Container from "./Container.vue";

export default {
    title: "Components/Container",
    component: Container,
    args: {
        center: false,
        gutters: false,
        fixed: false,
        rounded: false,
    },
    argTypes: {
        scheme: { control: { type: "radio" }, options: ["primary", "secondary"] },
        variant: {
            control: { type: "radio" },
            options: ["elevated", "regular", "bordered"],
        },
        "max-width": {
            control: { type: "radio" },
            options: ["sm", "md", "lg", "xl", false],
        },
        elevation: {
            control: { type: "radio" },
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        border: { control: { type: "radio" }, options: ["sm", "md", "lg", "xl"] },
    },
} as Meta<ContainerProps>;

export const Default = (args: ContainerProps) => {
    return defineComponent({
        setup() {
            return { args };
        },
        template: `
        <RContainer v-bind="args">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam reiciendis,
        voluptates reprehenderit facilis fugit molestias quibusdam, possimus libero quidem
        distinctio similique harum, delectus obcaecati omnis ullam. Veritatis et iure
        libero error cum enim voluptate corporis tempora suscipit ipsa, similique autem
        necessitatibus illum assumenda deleniti rem, itaque sit soluta! Quos, culpa.
        Cupiditate aut quis ducimus ea maiores tempora totam labore consequuntur ullam
        quaerat minus culpa provident, nostrum perferendis vero dolore quasi alias, est,
        eveniet accusantium. Possimus reprehenderit deleniti voluptatum modi, libero
        magnam officiis vitae nam ex perspiciatis aliquam ipsam laborum assumenda
        molestiae in aut! Odit accusamus fugit deleniti consectetur excepturi?</p>
        </RContainer>
      `,
    });
};
