"use client";

import { VscChromeClose } from "react-icons/vsc";
import { useAnimate } from "motion/react"


export default function CloseButton() {

    let scale = 1;
    const [scope, animate] = useAnimate()

    function nuUhUh() {
        const x = Math.round( getRandomNumber(scope.current.offsetWidth, window.innerWidth - scope.current.offsetWidth) - scope.current.offsetLeft);
        const y = Math.round(getRandomNumber(scope.current.offsetHeight, window.innerHeight + scope.current.offsetTop) - scope.current.offsetTop);
        scale -= 0.1;

        animate(scope.current, { x: x, y: y, scale: scale }, { duration: 0.5, ease: "linear",  type: "spring", stiffness: 100 })
    }

    const getRandomNumber = (min: number, max: number) => {
        return Math.random() * (max - min) + min
    }
    return (
        <div className={`flex flex-col items-center justify-center px-4 transition-colors cursor-pointer hover:bg-red-600`}
            onMouseEnter={nuUhUh}
            ref={scope}>
                <VscChromeClose />
        </div>
    )
}