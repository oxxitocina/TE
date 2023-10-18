import { useTranslation } from "react-i18next";
import { useTheme } from "./setup/providers/ThemeProvider";
import classNames from "classnames";
import { Header } from "./widgets/Header";

function App() {
  const { t, i18n } = useTranslation("common");
  const { theme, toggleTheme } = useTheme()

  function handleClick() {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  }

  return (
    <div className={classNames('app', [theme])}>
      <Header/>
      {t("test")}
      <button onClick={handleClick}>{t("change lang")}</button>
      <button onClick={toggleTheme}>{t("change theme")}</button>
    </div>
  );
}

export default App;
