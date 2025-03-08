"use client";

import { createContext, useContext, useState } from "react";

type ConsoleTray = {
    log: string[];
    isExpanded: boolean;
    height: number;
    setLog: (log: string[]) => void;
    setIsExpanded: (isExpanded: boolean) => void;
    setHeight: (height: number) => void;

}

const initialConsoleTray: Omit<ConsoleTray, 'setLog' | 'setIsExpanded' | 'setHeight'> = {
    log: [],
    isExpanded: true,
    height: 200,
}

const ConsoleTrayContext = createContext<ConsoleTray>({
    ...initialConsoleTray,
    setLog: () => {},
    setIsExpanded: () => {},
    setHeight: () => {},
});

export const ConsoleTrayProvider = ({children} : {children: React.ReactNode}) => {
    const [log, setLog] = useState<string[]>(initialConsoleTray.log);
    const [isExpanded, setIsExpanded] = useState<boolean>(initialConsoleTray.isExpanded);
    const [height, setHeight] = useState<number>(initialConsoleTray.height);

    return (
        <ConsoleTrayContext.Provider value={{ log, isExpanded, height, setLog, setIsExpanded, setHeight }}>
            {children}
        </ConsoleTrayContext.Provider>
    )
}

export const useConsoleTray = () => {
    return useContext(ConsoleTrayContext);
}