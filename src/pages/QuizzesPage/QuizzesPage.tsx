import classNames from "classnames"
import cls from './QuizzesPage.module.css'
import CheckIcon from '@/assets/svg/check.svg?react'

interface QuizzesPageProps {
    className?: string
}

export const QuizzesPage = ({className}: QuizzesPageProps) => {
  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
    <div className={cls.questions_wrapper}>
        <div className={cls.question_wrapper}>
            <div className={cls.question_count}>Question 1:</div>
            <div className={cls.question}>which hero is the strongest in dota?</div>
            <ul className={cls.answers_wrapper}>
                <li className={cls.answer}><button className={cls.ratio_button}/>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
            </ul>
        </div>

        <div className={cls.question_wrapper}>
            <div className={cls.question_count}>Question 1:</div>
            <div className={cls.question}>which hero is the strongest in dota?</div>
            <ul className={cls.answers_wrapper}>
                <li className={cls.answer}>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
                <li className={cls.answer}>Trent Protector</li>
            </ul>
        </div>
    </div>
    </div>
  )
}



