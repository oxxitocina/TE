import { Theme, ThemeContext, THEME_LOCALSTORAGE_KEY } from "./ThemeContext";
import { useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeProps = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};
