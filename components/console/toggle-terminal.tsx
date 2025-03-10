"use client";

import { useConsoleTray } from './console-tray-provider';

export default function ToggleTerminal({
    children,
    className
}: {
    children: React.ReactNode,
    className: string
}) {

    const { isExpanded, setIsExpanded } = useConsoleTray();

    return (
        <div
            className={className}                     
            onClick={() => { setIsExpanded(!isExpanded) }}>
            {children}
        </div>
    )
}