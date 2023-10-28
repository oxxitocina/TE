import classNames from "classnames";
import cls from "./QuizzesPage.module.css";
import { AnswersList } from "./Components/AnswersList/AnswersList";
import { Button } from "@/common/Button/Button";
import { useState } from "react";

interface QuizzesPageProps {
  className?: string;
}

export const QuizzesPage = ({ className }: QuizzesPageProps) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [answers, setAnswers] = useState<number[] | null[]>(
    new Array(arr.length).fill(null),
  );
  const rightAnswers = [2, 1, 1, 2, 0, 2, 2, 1, 1, 1];

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("wad");
      return;
    }

    let counter = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === rightAnswers[i]) {
        counter++;
      }
    }

    alert(`${counter} right out of ${answers.length}`);
    setIsDone(true);
  };

  console.log(answers);

  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
      <div className={cls.questions_wrapper}>
        {arr.map((question, index) => (
          <div className={cls.question_wrapper}>
            <div className={cls.question_count}>Question {index + 1}:</div>
            <div className={cls.question}>Which computer is the best?</div>
            <AnswersList
              questionCount={index}
              answers={answers}
              setAnswers={setAnswers}
              isDone={isDone}
              rightAnswer={rightAnswers[index]}
            />
          </div>
        ))}

        <Button onClick={handleSubmit} className={cls.button}>
          Submit
        </Button>
        {isDone && (
          <Button onClick={handleSubmit} className={cls.button}>
            Back to handbook
          </Button>
        )}
      </div>
    </div>
  );
};
