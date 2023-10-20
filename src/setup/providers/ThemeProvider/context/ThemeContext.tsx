import { createContext } from "react";

export enum Theme {
  DARK = "dark-theme",
  LIGHT = "light-theme",
}

export const THEME_LOCALSTORAGE_KEY = "theme";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});
