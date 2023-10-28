import classNames from "classnames";
import cls from "./HandbookPage.module.css";
import { TopicsSection } from "./Components/TopicsSection/TopicsSection";
import { DataSection } from "./Components/DataSection/DataSection";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/common/Button/Button";

interface HandbookProps {
  className?: string;
}

export const HandbookPage = ({ className }: HandbookProps) => {
  const { topicName } = useParams();
  const topic = topicName as string;
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/quiz/${topic}`)
  };

  return (
    <div className={classNames(cls.handbook, {}, [className])}>
      <TopicsSection />
      {topic === "main" ? undefined : <DataSection topic={topic} />}
      <div className={cls.button_wrapper}>
          <Button onClick={handleClick}>Go to quiz</Button>
      </div>
    </div>
  );
};
