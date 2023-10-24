import cls from "./AnswersList.module.css";
import { useState } from "react";
import CheckIcon from "@/assets/svg/check.svg?react";

interface AnswersListProps {
  className?: string;
  questionCount: number
}

export const AnswersList = ({ className, questionCount }: AnswersListProps) => {
  const [isAnswer, setIsAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[] | null>(null);

  const arr2 = [0, 1, 2, 3];

  const handleClick = (id: number) => {
    setIsAnswer(id);
  };

  return (
    <ul className={cls.answers_wrapper}>
      {arr2.map((answer, index) => (
        <li
          className={isAnswer === index ? cls.answer2 : cls.answer}
          onClick={() => {
            handleClick(index);
          }}
        >
            {isAnswer === index ? <button className={cls.check_button}><CheckIcon className={cls.check_icon}/></button> : <button className={cls.check_button}/>}
          <p>Trent Protector</p>
        </li>
      ))}
    </ul>
  );
};
