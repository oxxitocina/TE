import classNames from "classnames";
import cls from "./MainSection.module.css";
import { Button, ButtonTheme } from "@/common/Button/Button";
import LearningImage from "@/assets/img/learning2.svg";

interface MainSectionProps {
  className?: string;
}

export const MainSection = ({ className }: MainSectionProps) => {
  return (
    <div className={classNames(cls.main_section, {}, [className])}>
      <div className={cls.first_wrapper}>
        <div className={cls.heading}>
          Smart skills for 21st century learners.
        </div>
        <div className={cls.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ipsam deleniti, quos
        </div>
        <div className={cls.buttons_wrapper}>
          <Button theme={ButtonTheme.SECONDARY}>How does it work</Button>
          <Button theme={ButtonTheme.PRIMARY}>Get Started</Button>
        </div>
      </div>
      <div className={cls.second_wrapper}>
        <div className={cls.image_wrapper}>
          <img src={LearningImage} />
        </div>
        <div className={cls.window}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          deserunt recusandae
        </div>
      </div>
    </div>
  );
};
