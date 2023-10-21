import classNames from "classnames";
import cls from "./MenuModal.module.css";
import { Portal } from "../Portal/Portal";
import { IconButton } from "../IconButton/IconButton";
import CloseIcon from "@/assets/svg/x.svg?react";
import { Theme, useTheme } from "@/setup/providers/ThemeProvider";
import Light from "@/assets/svg/light.svg?react";
import Dark from "@/assets/svg/dark.svg?react";
import Translate from "@/assets/svg/translate.svg?react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Routes } from "@/setup/consts/routes/routes";

interface MenuModalProps {
  className?: string;
  onClose: () => void;
}

export const MenuModal = ({ className, onClose }: MenuModalProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation("common");

  function handleClick() {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }

  return (
    <Portal>
      <div className={classNames(cls.menu_modal, {}, [className, theme])}>
        <div className={cls.close_icon_wrapper}>
          <IconButton onClick={handleClick}>
            <Translate className={cls.icon} />
          </IconButton>
          <IconButton onClick={toggleTheme}>
            {theme === Theme.LIGHT ? (
              <Light className={cls.icon} />
            ) : (
              <Dark className={cls.icon} />
            )}
          </IconButton>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

          <ul className={cls.nav}>
            <li>
              <Link to={Routes.MAIN.path}>{t('Home')}</Link>
            </li>
            <li>
              <Link to={`/handbook/main`}>{t('Handbook')}</Link>
            </li>
            <li>{t('Login')}</li>
          </ul>

      </div>
    </Portal>
  );
};
