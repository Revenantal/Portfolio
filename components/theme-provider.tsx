"use client";

import { createContext, useContext } from "react";

type Theme = {
    colors: {
        background: string;
        foreground: string;
    }
}

const defaultTheme : Theme = {
    colors: {
        background: "white",
        foreground: "black"
    }
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({children} : {children: React.ReactNode}) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}