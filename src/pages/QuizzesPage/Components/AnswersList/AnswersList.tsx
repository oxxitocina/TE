import classNames from "classnames"
import cls from './AnswersList.module.css'
import { useState } from "react"

interface AnswersListProps {
    className?: string
}

export const AnswersList = ({className}: AnswersListProps) => {
    const [isAnswer, setIsAnswer] = useState<number | null>(null)
    const arr2 = [0, 1, 2, 3]
    const handleClick = (id: number) => {
        setIsAnswer(id)
    }
    
  return (
    <ul className={cls.answers_wrapper}>
        {arr2.map((answer, index) => 
            <li className={isAnswer === index ? cls.answer2 : cls.answer} onClick={() => {handleClick(index)}}><button className={cls.ratio_button}/><p>Trent Protector</p></li>
        )}
    </ul>
  )
}



