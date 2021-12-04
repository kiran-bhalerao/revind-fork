import { Meta } from "@storybook/react";
import { VStack } from "components/Stack/Stack";
import { Text } from "components/Text/Text";
import React, { useState } from "react";
import { Radio } from "./Radio";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

export default {
    title: "Components/RadioGroup",
    component: RadioGroup,
    argTypes: {
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl", "2xl"],
            control: { type: "radio" },
        },
        defaultChecked: { control: { type: "text" } },
    },
} as Meta<RadioGroupProps>;

export const Default = (props: RadioGroupProps) => {
    const [value, setValue] = useState();

    function onChange(selectedValue?: any) {
        setValue(selectedValue);
    }

    return (
        <VStack items="start">
            <Text variant="h4">Uncontrolled Radio Group</Text>
            <RadioGroup {...props} name="best-football-team" defaultChecked="brazil">
                <Radio value="brazil" label="Brazil" />
                <Radio value="argentina" label="Argentina" />
                <Radio value="france" label="France" />
            </RadioGroup>
            <Text variant="h4">Controlled Radio Group</Text>
            <RadioGroup
                {...props}
                name="best-football-club"
                value={value}
                onChange={onChange}
            >
                <Radio value="barcelona" label="Barcelona" />
                <Radio value="psg" label="PSG" />
                <Radio value="manchester-united" label="Manchester United" />
            </RadioGroup>
        </VStack>
    );
};
