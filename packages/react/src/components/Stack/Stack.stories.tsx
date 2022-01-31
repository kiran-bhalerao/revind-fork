import React from "react";
import { Meta } from "@storybook/react";
import { Stack, StackProps } from "./Stack";
import { Container } from "components/Container/Container";
import { Text } from "components/Text/Text";

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: {
        direction: {
            control: { type: "select" },
            options: ["column", "row", "row-reverse", "column-reverse"],
        },
        items: {
            control: { type: "select" },
            options: ["center", "start", "end", "stretch", "baseline"],
        },
        justify: {
            control: { type: "select" },
            options: ["center", "start", "end", "between", "around", "evenly"],
        },
        wrap: {
            control: { type: "select" },
            options: ["wrap", "no-wrap", "wrap-reverse"],
        },
    },
} as Meta<StackProps>;

export const Vertical = (props: StackProps) => (
    <Stack className="space-x-2" {...props}>
        <span>ooooooo</span>
        <span>ahhhhh</span>
        <span>Woah!</span>
    </Stack>
);

function Feature({ title, children, ...rest }: any) {
    return (
        <Container
            className="p-5 shadow-md border-2 border-solid flex-1 rounded-md"
            {...rest}
        >
            <Text variant="h3">{title}</Text>
            <Text className="mt-2">{children}</Text>
        </Container>
    );
}

export const WithContent = (props: StackProps) => (
    <Stack
        direction="row"
        spacing-horizontal="space-x-8"
        spacing-vertical="space-y-8"
        wrap="wrap"
        {...props}
    >
        <Feature
            title="Plan Money"
            children="The future can be even brighter but a goal without a plan is just a wish"
        />
        <Feature
            title="Save Money"
            children="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
        />
    </Stack>
);
