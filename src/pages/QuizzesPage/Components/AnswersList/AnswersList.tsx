import cls from "./AnswersList.module.css";
import { useState } from "react";
import CheckIcon from "@/assets/svg/check.svg?react";

interface AnswersListProps {
  className?: string;
  questionCount: number;
  answers: number[];
  setAnswers: () => void;
  isDone: boolean;
  rightAnswer?: number;
  quizAnswers
}

export const AnswersList = ({
  questionCount,
  answers,
  setAnswers,
  isDone,
  rightAnswer,
  quizAnswers
}: AnswersListProps) => {
  const [isAnswer, setIsAnswer] = useState<number | null>(null);

  const arr2 = [0, 1, 2, 3];

  const handleClick = (id: number) => {
    setIsAnswer(id);
    const newAnswers = [...answers];
    newAnswers[questionCount] = id;
    setAnswers(newAnswers);
  };

  return (
    <ul className={cls.answers_wrapper}>
      {quizAnswers.map((answer, index) => (
        <li
          className={
            isDone === false
              ? cls.answer
              : index === rightAnswer
              ? cls.answer2
              : cls.answer
          }
        >
          <button
            disabled={isDone}
            className={cls.check_button}
            onClick={() => {
              handleClick(index);
            }}
          >
            {isAnswer === index ? (
              <CheckIcon className={cls.check_icon} />
            ) : undefined}
          </button>
          <p>{answer}</p>
        </li>
      ))}
    </ul>
  );
};
