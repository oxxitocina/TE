import  classNames  from "classnames"
import cls from './MainPage.module.css'
import LearningImage from '@/assets/img/learning.png'

interface MainPageProps {
    className?: string
}

export const MainPage = ({className}: MainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
        <div className={cls.first_wrapper}>
            <div className={cls.heading}>
                Smart skills for 21st century learners.
            </div>
            <div className={cls.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam deleniti, quos
            </div>
        </div>
        <div className={cls.second_wrapper}>
            <div className={cls.image_wrapper}>
                <img src={LearningImage}/>
            </div>
            <div className={cls.window}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus deserunt recusandae
            </div>
        </div>
    </div>
  )
}



