import classNames from "classnames"
import cls from './Header.module.css'
import { SearchBar } from "@/common/SearchBar/SearchBar"
import { useTranslation } from "react-i18next";
import { useTheme } from "@/setup/providers/ThemeProvider";

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
  const { t, i18n } = useTranslation("common");
  const { toggleTheme } = useTheme()

  function handleClick() {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }


  return (
    <div className={classNames(cls.header, {}, [className])}>
        <div className={cls.logo}>BrainWave</div>
        <div className={cls.searchWrapper}>
          <SearchBar/>
        </div>
        <div className={cls.wrapper}>
          <ul className={cls.nav}>
            <li>
              <button onClick={handleClick}>{t("change lang")}</button>
              </li>
            <li>
              <button onClick={toggleTheme}>{t("change theme")}</button>
              </li>
            <li>Home</li>
            <li>Login</li>
          </ul>
        </div>
    </div>
  )
}



