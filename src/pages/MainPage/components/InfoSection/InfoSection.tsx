import classNames from "classnames";
import cls from "./InfoSection.module.css";

interface InfoSectionProps {
  className?: string;
}

export const InfoSection = ({ className }: InfoSectionProps) => {
  return (
    <div className={classNames(cls.info_section, {}, [className])}>
      <div className={cls.work_section}>
        <div className={`${cls.info_box}`}>
          <div className={cls.title}>How Does it Work?</div>
          <div className={cls.text}>
            Get your personalized color palette in 4 steps.
          </div>
        </div>
        <div className={`${cls.column} ${cls.first}`}>
          <div className={cls.number}>1</div>
          <div className={cls.text_content}>
            Start with two neutral colors for the text and the background.
          </div>
        </div>
        <div className={`${cls.column} ${cls.second}`}>
          <div className={cls.number}>2</div>
          <div className={cls.text_content}>
            Start with two neutral colors for the text and the background.
          </div>
        </div>
        <div className={`${cls.column} ${cls.third}`}>
          <div className={cls.number}>3</div>
          <div className={cls.text_content}>
            Start with two neutral colors for the text and the background.
          </div>
        </div>
        <div className={`${cls.column} ${cls.fourth}`}>
          <div className={cls.number}>4</div>
          <div className={cls.text_content}>
            Start with two neutral colors for the text and the background.
          </div>
        </div>
      </div>
    </div>
  );
};
