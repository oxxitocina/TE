import { Theme, ThemeContext } from "./ThemeContext";
import { useState } from 'react'

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [ theme, setTheme ] = useState<Theme>(Theme.LIGHT)

  const themeProps = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={themeProps}>
        {children}
    </ThemeContext.Provider>
  )
}



