import classNames from "classnames";
import cls from "./HandbookPage.module.css";
import { TopicsSection } from "./Components/TopicsSection/TopicsSection";
import { DataSection } from "./Components/DataSection/DataSection";
import { useParams } from "react-router-dom";

interface HandbookProps {
  className?: string;
}

export const HandbookPage = ({ className }: HandbookProps) => {
  const { topicName } = useParams();
  const topic = topicName as string;

  return (
    <div className={classNames(cls.handbook, {}, [className])}>
      <TopicsSection />
      {topic === "main" ? undefined : <DataSection topic={topic} />}
    </div>
  );
};
