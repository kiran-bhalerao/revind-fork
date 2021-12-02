import React from "react";
import { Meta } from "@storybook/react";
import { Input, InputProps } from "./Input";
import { InputAddon, InputAddonProps } from "./InputAddon";
import { Flex } from "../Flex/Flex";
import { Text } from "../Text/Text";
import { InputElement } from "./InputElement";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: {
            options: [
                "text",
                "email",
                "password",
                "hidden",
                "number",
                "tel",
                "url",
                "datetime",
            ],
            control: { type: "select" },
        },
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: { options: ["sm", "md", "lg", "xl"], control: { type: "radio" } },
    },
} as Meta<InputProps>;

const Template = (props: InputProps) => {
    return (
        <Flex justifyContent="around">
            <Flex direction="column">
                <Text>Outlined</Text>
                <Input
                    variant="outlined"
                    {...props}
                    left-addons={(props["left-addons"] as any)?.("outlined")}
                    right-addons={(props["right-addons"] as any)?.("outlined")}
                />
            </Flex>
            <Flex direction="column">
                <Text>Filled</Text>
                <Input
                    variant="filled"
                    {...props}
                    left-addons={(props["left-addons"] as any)?.("filled")}
                    right-addons={(props["right-addons"] as any)?.("filled")}
                />
            </Flex>
            <Flex direction="column">
                <Text>Minimal</Text>
                <Input
                    variant="minimal"
                    {...props}
                    left-addons={(props["left-addons"] as any)?.("minimal")}
                    right-addons={(props["right-addons"] as any)?.("minimal")}
                />
            </Flex>
        </Flex>
    );
};

const defaultArgs = {
    margin: true,
    "full-width": false,
    label: "Input",
    placeholder: "placeholder",
    required: true,
};

export const Default = Template.bind({});

(Default as any).args = defaultArgs as InputProps;

export const MaterialStaticLabelled = Template.bind({});
(MaterialStaticLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "material-static",
    },
} as InputProps;

export const LeftLabelled = Template.bind({});
(LeftLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "left",
    },
} as InputProps;

export const TopLabelled = Template.bind({});
(TopLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "top",
    },
} as InputProps;

export const WithoutLabel = Template.bind({});

(WithoutLabel as any).args = {
    ...defaultArgs,
    label: undefined,
};

export const WithAddon = Template.bind({});

(WithAddon as any).args = {
    ...defaultArgs,
    "left-addons": (v: InputAddonProps["inputVariant"]) => (
        <InputAddon variant="static" inputVariant={v}>
            Email
        </InputAddon>
    ),
};

export const WithRightAddon = Template.bind({});

(WithRightAddon as any).args = {
    ...defaultArgs,
    "right-addons": (v: InputAddonProps["inputVariant"]) => (
        <InputAddon variant="static" inputVariant={v}>
            Add
        </InputAddon>
    ),
};

export const WithBothAddon = Template.bind({});

(WithBothAddon as any).args = {
    ...defaultArgs,
    "left-addons": (v: InputAddonProps["inputVariant"]) => (
        <InputAddon variant="static" inputVariant={v}>
            Email
        </InputAddon>
    ),
    "right-addons": (v: InputAddonProps["inputVariant"]) => (
        <InputAddon variant="static" inputVariant={v}>
            Add
        </InputAddon>
    ),
};

export const WithElement = Template.bind({});

(WithElement as any).args = {
    ...defaultArgs,
    element: <InputElement>&times;</InputElement>,
};
