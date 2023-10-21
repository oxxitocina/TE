import classNames from "classnames";
import cls from "./TopicsSection.module.css";
import { TOPICS } from "@/setup/consts/topics/topics";
import { useNavigate } from "react-router-dom";

interface TopicsSectionProps {
  className?: string;
}

export const TopicsSection = ({ className }: TopicsSectionProps) => {
  const navigate = useNavigate();

  const handleClick = (topic: string) => {
    navigate(`/handbook/${topic}`);
  };

  return (
    <div className={classNames(cls.topics_section, {}, [className])}>
      <div className={cls.topics_wrapper}>Topics</div>
      <ul className={cls.topics_list_grid}>
        {TOPICS.map((topic, index) => {
          return (
            <li
              key={`${topic}-${index}`}
              onClick={() => {
                handleClick(topic);
              }}
            >
              {index + 1}. {topic}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
