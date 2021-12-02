import { InputAddonOptions } from "./input-addon";
import { BaseStyleObj } from "./styles";

export interface InputElementOptions extends Pick<InputAddonOptions, "size"> {
    styleObj?: InputElementStyleObj;
}

export interface InputElementStyleObj extends BaseStyleObj {}
