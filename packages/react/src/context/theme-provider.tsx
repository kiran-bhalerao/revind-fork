import React, { createContext, FC } from "react";
import {
    buttonStyleObj,
    flexStyleObj,
    containerStyleObj,
    checkboxStyleObj,
    hiddenStyleObj,
    textStyleObj,
    buttonGroupStyleObj,
    inputStyleObj,
    inputLabelStyleObj,
    inputAddonStyleObj,
    inputGroupStyleObj,
    stackStyleObj,
} from "@revind/styles";
import {
    ButtonGroupStyleObj,
    ButtonStyleObj,
    TextStyleObj,
    ContainerStyleObj,
    FlexStyleObj,
    HiddenStyleObj,
    InputStyleObj,
    InputLabelStyleObj,
    CheckboxStyleObj,
    ContainerOptions,
    FlexOptions,
    HiddenOptions,
    InputLabelOptions,
    TextOptions,
    InputAddonStyleObj,
    InputAddonOptions,
    InputGroupStyleObj,
    InputGroupOptions,
    StackStyleObj,
    StackOptions,
} from "@revind/types";
import { ReactRevindButtonOptions } from "components/Button/Button";
import {
    ReactRevindButtonGroupOptions,
    ReactRevindInputOptions,
    ReactRevindCheckboxOptions,
} from "main";

export interface ThemeContext {
    styleObjects: {
        Button: ButtonStyleObj;
        ButtonGroup: ButtonGroupStyleObj;
        Checkbox: CheckboxStyleObj;
        Container: ContainerStyleObj;
        Flex: FlexStyleObj;
        Hidden: HiddenStyleObj;
        Input: InputStyleObj;
        InputAddon: InputAddonStyleObj;
        InputGroup: InputGroupStyleObj;
        InputLabel: InputLabelStyleObj;
        Text: TextStyleObj;
        Stack: StackStyleObj;
    };
    props: {
        Button?: ReactRevindButtonOptions;
        ButtonGroup?: ReactRevindButtonGroupOptions;
        Checkbox?: ReactRevindCheckboxOptions;
        Container?: ContainerOptions;
        Flex?: FlexOptions;
        Hidden?: HiddenOptions;
        Input?: ReactRevindInputOptions;
        InputAddon?: InputAddonOptions;
        InputGroup?: InputGroupOptions;
        InputLabel?: InputLabelOptions;
        Text?: TextOptions;
        Stack?: StackOptions<React.ReactElement>;
    };
}

export const defaultTheme: ThemeContext = {
    styleObjects: {
        Button: buttonStyleObj,
        ButtonGroup: buttonGroupStyleObj,
        Checkbox: checkboxStyleObj,
        Container: containerStyleObj,
        Flex: flexStyleObj,
        Hidden: hiddenStyleObj,
        Input: inputStyleObj,
        InputAddon: inputAddonStyleObj,
        InputLabel: inputLabelStyleObj,
        InputGroup: inputGroupStyleObj,
        Text: textStyleObj,
        Stack: stackStyleObj,
    },
    props: {},
};
export const themeCtx = createContext<ThemeContext>(defaultTheme);

export interface ThemeProviderProps {
    theme: ThemeContext;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
    return <themeCtx.Provider value={theme}>{children}</themeCtx.Provider>;
};
