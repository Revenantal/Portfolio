'use client';

{/* TODO: Is there a way to do this without using client? */}
{/* TODO: Add animations */}

import ControlBar from "./controlBar";
import LogWindow from "./logWindow";
import { useConsoleTray } from "./console-tray-provider";
import Resizer from "./resizer";

export default function Console() {

    const { isExpanded, height } = useConsoleTray();

    return (
        <div style={{ height: height }} className={`relative lg:flex flex-col bg-background-accent border-y p-4 py-2 gap-2 pe-0 ${!isExpanded && '!hidden'}`}>
            <Resizer/>
            <ControlBar />
            <LogWindow />
        </div>
    )
}