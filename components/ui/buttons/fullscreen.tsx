"use client";

/**
 * So I was planning on useEffects on hooks and such to get that actual browser window state, but turns out this is all pretty poorly supported as of Feb, 2025 
 * https://github.com/mdn/content/issues/13674
 */

import { VscChromeMaximize, VscChromeRestore  } from "react-icons/vsc";
import { useState } from "react";

export default function FullscreenButton() {

    const [isFullscreen, setIsFullscreen] = useState(false);

    function toggleFullscreen() {
        if (isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
        } else {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 hover:bg-background-light transition-colors cursor-pointer"
            onClick={() => toggleFullscreen()}>
            {isFullscreen ? <VscChromeRestore /> : <VscChromeMaximize />}
        </div>
    )
}