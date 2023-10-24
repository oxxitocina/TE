import classNames from "classnames";
import cls from "./QuizzesPage.module.css";
import { AnswersList } from "./Components/AnswersList/AnswersList";
import { Button } from "@/common/Button/Button";

interface QuizzesPageProps {
  className?: string;
}

export const QuizzesPage = ({ className }: QuizzesPageProps) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
      <div className={cls.questions_wrapper}>
        {arr.map((question, index) => (
          <div className={cls.question_wrapper}>
            <div className={cls.question_count}>Question {index + 1}:</div>
            <div className={cls.question}>
              Which hero is the strongest in dota?
            </div>
            <AnswersList questionCount={index}/>
          </div>
        ))}

        <Button className={cls.button}>Submit</Button>
      </div>
    </div>
  );
};
