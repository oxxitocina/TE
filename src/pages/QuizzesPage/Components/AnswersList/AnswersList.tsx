import classNames from "classnames"
import cls from './AnswersList.module.css'
import { useState } from "react"
import { IconButton, IconButtonSize } from "@/common/IconButton/IconButton"
import CheckIcon from '@/assets/svg/check.svg?react'

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
            <li className={isAnswer === index ? cls.answer2 : cls.answer} onClick={() => {handleClick(index)}}>
                <div className={cls.check_button}><IconButton size={IconButtonSize.S}><CheckIcon/></IconButton></div>
                <p>Trent Protector</p>
            </li>
        )}
    </ul>
  )
}



