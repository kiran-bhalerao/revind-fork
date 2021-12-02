import React from "react";
import { Meta } from "@storybook/react";
import { Stack, StackProps } from "./Stack";
import { Container } from "components/Container/Container";
import { Text } from "components/Text/Text";

export default {
    title: "Components/Stack",
    component: Stack,
} as Meta<StackProps>;

export const Vertical = () => (
    <Stack className="space-x-2">
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

export const WithContent = () => (
    <Stack direction="row" className="space-x-8">
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
