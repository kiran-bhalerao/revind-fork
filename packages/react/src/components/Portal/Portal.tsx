/**
 * @author chakra-ui <https://chakra-ui.com>
 * ALL CREDITS FOR `Portal` GOES TO chakra-ui
 * Thanks, to chakra-ui for making such a great library
 */

import { useForceUpdate } from "hooks/useForceUpdate";
import React, { useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ComponentIds } from "utils/component-ids";
import { createContext } from "utils/create-context";

type PortalContext = HTMLDivElement | null;

const [PortalContextProvider, usePortalContext] = createContext<PortalContext>({
    strict: false,
    name: "PortalContext",
});

const PORTAL_CLASSNAME = "revind-portal";
const PORTAL_SELECTOR = `.revind-portal`;

const Container: React.FC<{ zIndex: number }> = (props) => (
    <div
        className="revind-portal-zIndex"
        style={{
            position: "absolute",
            zIndex: props.zIndex,
            top: 0,
            left: 0,
            right: 0,
            // NB: Don't add `bottom: 0`, it makes the entire app unusable
            // @see https://github.com/chakra-ui/chakra-ui/issues/3201
        }}
    >
        {props.children}
    </div>
);

/**
 * Portal that uses `document.body` as container
 */
const DefaultPortal: React.FC<{ appendToParentPortal?: boolean; zIndex?: number }> = (
    props,
) => {
    const { appendToParentPortal, children } = props;

    const tempNode = React.useRef<HTMLDivElement | null>(null);
    const portal = React.useRef<HTMLDivElement | null>(null);

    const forceUpdate = useForceUpdate();

    const parentPortal = usePortalContext();

    useLayoutEffect(() => {
        if (!tempNode.current) return;

        const doc = tempNode.current!.ownerDocument;
        const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;

        if (!host) return;

        portal.current = doc.createElement("div");
        portal.current.className = PORTAL_CLASSNAME;

        host.appendChild(portal.current);
        forceUpdate();

        const portalNode = portal.current;
        return () => {
            if (host.contains(portalNode)) {
                host.removeChild(portalNode);
            }
        };
    }, []);

    const _children = props?.zIndex ? (
        <Container zIndex={props?.zIndex}>{children}</Container>
    ) : (
        children
    );

    return portal.current ? (
        createPortal(
            <PortalContextProvider value={portal.current}>
                {_children}
            </PortalContextProvider>,
            portal.current,
        )
    ) : (
        <span ref={tempNode} />
    );
};

interface ContainerPortalProps {
    containerRef: React.RefObject<HTMLElement | null>;
    appendToParentPortal?: boolean;
}

/**
 * Portal that uses a custom container
 */
const ContainerPortal: React.FC<ContainerPortalProps> = (props) => {
    const { children, containerRef, appendToParentPortal } = props;
    const containerEl = containerRef.current;
    const host = containerEl ?? document.body;

    const portal = React.useMemo(() => {
        const node = containerEl?.ownerDocument.createElement("div");
        if (node) node.className = PORTAL_CLASSNAME;
        return node;
    }, [containerEl]);

    const forceUpdate = useForceUpdate();

    useLayoutEffect(() => {
        forceUpdate();
    }, []);

    useLayoutEffect(() => {
        if (!portal || !host) return;
        host.appendChild(portal);
        return () => {
            host.removeChild(portal);
        };
    }, [portal, host]);

    if (host && portal) {
        return createPortal(
            <PortalContextProvider value={appendToParentPortal ? portal : null}>
                {children}
            </PortalContextProvider>,
            portal,
        );
    }

    return null;
};

export interface PortalProps {
    /**
     * The `ref` to the component where the portal will be attached to.
     */
    containerRef?: React.RefObject<HTMLElement | null>;
    /**
     * The content or node you'll like to portal
     */
    children: React.ReactNode;
    /**
     * If `true`, the portal will check if it is within a parent portal
     * and append itself to the parent's portal node.
     * This provides nesting for portals.
     *
     * If `false`, the portal will always append to `document.body`
     * regardless of nesting. It is used to opt out of portal nesting.
     */
    appendToParentPortal?: boolean;
}

export function Portal(props: PortalProps) {
    const { containerRef, ...rest } = props;
    return containerRef ? (
        <ContainerPortal containerRef={containerRef} {...rest} />
    ) : (
        <DefaultPortal {...rest} />
    );
}

Portal.defaultProps = {
    appendToParentPortal: true,
};

Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;

Portal.id = ComponentIds.Portal;
