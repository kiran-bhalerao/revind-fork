import * as React from "react";
import { Portal } from "./Portal";

export default {
    title: "Components/Portal",
    component: Portal,
};

export const BasicPortal = () => (
    <>
        <p>Welcome</p>
        <Portal>This text has been portaled</Portal>
    </>
);

export const WithMountRef = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <p>Welcome</p>
            <Portal containerRef={ref}>
                <span>This text has been portaled</span>
            </Portal>
            <div id="iframe" ref={ref}>
                Portal Div
            </div>
        </>
    );
};

function Wrapper(props: any) {
    const { offset, color, children } = props;
    return (
        <div
            style={{
                top: offset || "46%",
                left: offset || "46%",
                backgroundColor: color,
            }}
            className="fixed w-52 p-5 text-center"
        >
            {children}
        </div>
    );
}

export const NestedPortals = () => (
    <Portal>
        <Wrapper color="red">Welcome</Wrapper>
        <Portal>
            <Wrapper offset="40%" color="green">
                Welcome
            </Wrapper>
            <Portal>
                <Wrapper offset="30%" color="tomato">
                    Welcome
                </Wrapper>
            </Portal>
        </Portal>
    </Portal>
);

export const WithCustomContainer = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    return (
        <div>
            <Portal containerRef={ref}>
                <div className="baba">
                    Welcome man
                    <Portal>Testing my powers</Portal>
                </div>
            </Portal>
            <div className="bg-red" ref={ref} />
        </div>
    );
};
