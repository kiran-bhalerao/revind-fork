import React from "react";
import { Meta } from "@storybook/react";
import { Radio, RadioProps, ReactRevindRadioOptions } from "./Radio";
import { HStack } from "components/Stack/Stack";

export default {
    title: "Components/Radio",
    component: Radio,
    argTypes: {
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl", "2xl"],
            control: { type: "radio" },
        },
        error: {
            type: "boolean",
        },
    },
} as Meta<ReactRevindRadioOptions>;

const Template = (props: RadioProps) => {
    return (
        <HStack>
            <Radio value="brazil" label="Brazil" name="revind-radio" {...props} />
            <Radio value="argentina" label="Argentina" name="revind-radio" {...props} />
        </HStack>
    );
};

export const Default = Template.bind({});
