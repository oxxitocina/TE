import classNames from "classnames";
import cls from "./Header.module.css";
import { SearchBar } from "@/common/SearchBar/SearchBar";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/setup/providers/ThemeProvider";
import { IconButton } from "@/common/IconButton/IconButton";
import Light from "@/assets/svg/light.svg?react";
import Dark from "@/assets/svg/dark.svg?react";
import Translate from "@/assets/svg/translate.svg?react";
import { Link } from "react-router-dom";
import { Routes } from "@/setup/consts/routes/routes";
import { getQuestions } from "@/setup/api/api";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { t, i18n } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();

  function handleClick() {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }

  const handleLoginClick = () => {
    getQuestions();
  };

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <div className={cls.logo}>
        <Link to={Routes.MAIN.path}>BrainWave</Link>
      </div>
      <div className={cls.searchWrapper}>
        <SearchBar />
      </div>
      <div className={cls.wrapper}>
        <ul className={cls.nav}>
          <li>
            <IconButton onClick={handleClick}>
              <Translate className={cls.icon} />
            </IconButton>
          </li>
          <li>
            <IconButton onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <Light className={cls.icon} />
              ) : (
                <Dark className={cls.icon} />
              )}
            </IconButton>
          </li>
          <li>
            <Link to={Routes.MAIN.path}>Home</Link>
          </li>
          <li>
            <Link to={`/handbook/main`}>Handbook</Link>
          </li>
          <li onClick={handleLoginClick}>Login</li>
        </ul>
      </div>
    </div>
  );
};
