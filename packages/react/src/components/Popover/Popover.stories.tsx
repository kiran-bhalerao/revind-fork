import { Button } from "main";
import * as React from "react";
import Popover from "./Popover";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";

export default {
    title: "Components/Popover",
    component: Popover,
};

export const Default = () => {
    return (
        <Popover>
            <PopoverTrigger>Click Me</PopoverTrigger>
            <PopoverContent></PopoverContent>
        </Popover>
    );
};
