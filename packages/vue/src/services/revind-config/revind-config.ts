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
import { VueRevindButtonOptions } from "../../components/Button/Button";

export interface RevindConfig {
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
        Button?: VueRevindButtonOptions;
        // ButtonGroup?: VueRevindButtonGroupOptions;
        // Checkbox?: VueRevindCheckboxOptions;
        Container?: ContainerOptions;
        Flex?: FlexOptions;
        Hidden?: HiddenOptions;
        // Input?: VueRevindInputOptions;
        InputAddon?: InputAddonOptions;
        InputElement?: InputElementOptions;
        InputGroup?: InputGroupOptions;
        InputLabel?: InputLabelOptions;
        Text?: TextOptions;
        // Stack?: StackOptions<React.ReactElement>;
        // Radio?: VueRevindRadioOptions;
    };
}

export const revindConfig: RevindConfig = {
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
