import { Theme } from "../context/ThemeContext";
import { ThemeContext, THEME_LOCALSTORAGE_KEY } from "../context/ThemeContext";
import { useContext } from "react";

interface useThemeProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): useThemeProps {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    setTheme(newTheme);
  }

  return { theme, toggleTheme };
}
