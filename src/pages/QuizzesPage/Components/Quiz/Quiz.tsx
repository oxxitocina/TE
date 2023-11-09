import classNames from "classnames";
import cls from "./Quiz.module.css";
import { AnswersList } from "../AnswersList/AnswersList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/common/Button/Button";

interface QuizProps {
  data;
}

export const Quiz = ({ data }: QuizProps) => {
  const { questions, correctAnswers } = data;
  const { topicName } = useParams();
  const topic = topicName as string;
  const [isDone, setIsDone] = useState<boolean>(false);
  const [answers, setAnswers] = useState<number[] | null[]>(
    new Array(questions.length).fill(null),
  );
  // const temp = isLoading === true ? null : processText(data?.data?.choices[0]?.message?.content);


  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("wad");
      return;
    }

    let counter = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        counter++;
      }
    }

    alert(`${counter} right out of ${answers.length}`);
    setIsDone(true);
  };

  console.log(answers);

  return (
    <div className={cls.questions_wrapper}>
      {questions.map((item, index) => (
        <div className={cls.question_wrapper}>
          <div className={cls.question_count}>Question {index + 1}:</div>
          <div className={cls.question}>{item.question}</div>
          <AnswersList
            quizAnswers={item.answers}
            questionCount={index}
            answers={answers}
            setAnswers={setAnswers}
            isDone={isDone}
            rightAnswer={correctAnswers[index]}
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
  );
};
