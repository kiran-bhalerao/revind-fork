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
    inputElementStyleObj,
    radioStyleObject,
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
    InputElementStyleObj,
    InputElementOptions,
    RadioStyleObject,
    RadioOptions,
} from "@revind/types";
import { ReactRevindButtonOptions } from "components/Button/Button";
import { ReactRevindButtonGroupOptions } from "components/ButtonGroup/ButtonGroup";
import { ReactRevindCheckboxOptions } from "components/Checkbox/Checkbox";
import { ReactRevindInputOptions } from "components/Input/Input";
import { ReactRevindRadioOptions } from "components/Radio/Radio";

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
        InputLabel: InputLabelStyleObj;
        InputElement: InputElementStyleObj;
        InputGroup: InputGroupStyleObj;
        Text: TextStyleObj;
        Stack: StackStyleObj;
        Radio: RadioStyleObject;
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
        InputElement?: InputElementOptions;
        InputGroup?: InputGroupOptions;
        InputLabel?: InputLabelOptions;
        Text?: TextOptions;
        Stack?: StackOptions<React.ReactElement>;
        Radio?: ReactRevindRadioOptions;
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
        InputElement: inputElementStyleObj,
        InputGroup: inputGroupStyleObj,
        Text: textStyleObj,
        Stack: stackStyleObj,
        Radio: radioStyleObject,
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
