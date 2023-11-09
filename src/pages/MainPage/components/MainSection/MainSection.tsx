import classNames from "classnames";
import cls from "./MainSection.module.css";
import { Button, ButtonTheme } from "@/common/Button/Button";
import LearningImage from "@/assets/img/learning2.svg";
import { useTranslation } from "react-i18next";

interface MainSectionProps {
  className?: string;
}

export const MainSection = ({ className }: MainSectionProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={classNames(cls.main_section, {}, [className])}>
      <div className={cls.first_wrapper}>
        <div className={cls.heading}>
          {t("Smart skills for 21st century learners.")}
        </div>
        <div className={cls.content}>
        {t("Study faster")}
        </div>
        <div className={cls.buttons_wrapper}>
          <Button theme={ButtonTheme.SECONDARY}>{t("How does it work")}</Button>
          <Button theme={ButtonTheme.PRIMARY}>{t("Get Started")}</Button>
        </div>
      </div>
      <div className={cls.second_wrapper}>
        <div className={cls.image_wrapper}>
          <img src={LearningImage} />
        </div>
        <div className={cls.window}>
        {t("Get your study plan")}
        </div>
      </div>
    </div>
  );
};
