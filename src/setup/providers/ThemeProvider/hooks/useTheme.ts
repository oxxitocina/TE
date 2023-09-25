import { Theme } from "../context/ThemeContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

interface useThemeProps {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): useThemeProps {
    const { theme, setTheme } = useContext(ThemeContext)

    function toggleTheme() {
        console.log(theme)
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        console.log('waea')
        setTheme(newTheme)
        console.log(newTheme, theme)
    }

    return { theme, toggleTheme }
}