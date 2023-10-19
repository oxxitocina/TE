import cls from "./MainPage.module.css";
import { MainSection } from "./components/MainSection/MainSection";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { SearchSection } from "./components/SearchSection/SearchSection";
import classNames from "classnames";

interface MainPageProps {
  className?: string;
}

export const MainPage = ({ className }: MainPageProps) => {
  return (
    <>
    <div className={classNames(cls.main_page, {}, [className])}>
      <MainSection/>
      <InfoSection/>
      <SearchSection/>
    </div>    
    </>
  );
};
