import classNames from "classnames"
import cls from './QuizzesPage.module.css'
import CheckIcon from '@/assets/svg/check.svg?react'
import { IconButton } from "@/common/IconButton/IconButton"

interface QuizzesPageProps {
    className?: string
}

export const QuizzesPage = ({className}: QuizzesPageProps) => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
    <div className={cls.questions_wrapper}>

        {arr.map((question, index) => 
            <div className={cls.question_wrapper}>
            <div className={cls.question_count}>Question {index+1}:</div>
            <div className={cls.question}>which hero is the strongest in dota?</div>
            <ul className={cls.answers_wrapper}>
                <li className={cls.answer}><button className={cls.ratio_button}/><p>Trent Protector</p></li>
                <li className={cls.answer}><button className={cls.ratio_button}/><p>Trent Protector</p></li>
                <li className={cls.answer}><button className={cls.ratio_button}/><p>Trent Protector</p></li>
                <li className={cls.answer}><div className={cls.check_button}><IconButton><CheckIcon/></IconButton></div><p>Trent Protector</p></li>
            </ul>
        </div>
        )}
    </div>
    </div>
  )
}



