"use client";

import { createContext, useContext, useState } from "react";

type Sidebar = {
    isExpanded: boolean;
    width: number;
    setIsExpanded: (isExpanded: boolean) => void;
    setWidth: (height: number) => void;
}

const initialSidebar: Omit<Sidebar, 'setIsExpanded' | 'setWidth'> = {
    isExpanded: true,
    width: 300,
}

const SidebarContext = createContext<Sidebar>({
    ...initialSidebar,
    setIsExpanded: () => {},
    setWidth: () => {},
});

export const SidebarProvider = ({children} : {children: React.ReactNode}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(initialSidebar.isExpanded);
    const [width, setWidth] = useState<number>(initialSidebar.width);

    return (
        <SidebarContext.Provider value={{ isExpanded, width, setIsExpanded, setWidth }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    return useContext(SidebarContext);
}