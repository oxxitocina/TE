import classNames from "classnames";
import cls from "./HandbookPage.module.css";
import { TopicsSection } from "./Components/TopicsSection/TopicsSection";
import { DataSection } from "./Components/DataSection/DataSection";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/common/Button/Button";
import { Input } from "@/common/Input/Input";

interface HandbookProps {
  className?: string;
}

export const HandbookPage = ({ className }: HandbookProps) => {
  const { topicName } = useParams();
  const topic = topicName as string;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${topic}`);
  };

  return (
    <div className={classNames(cls.handbook, {}, [className])}>
      <div className={cls.story_form}>
          <form>
            <Input/>
            <Input/> 
            <Input/>  
          </form>
      </div>
    </div>
  );
};
