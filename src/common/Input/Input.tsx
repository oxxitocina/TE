import classNames from "classnames"
import cls from './Input.module.css'

interface InputProps {
    className?: string;
}

export const Input = ({className} : InputProps) => {
    return (
        <input className={classNames(cls.input, {}, [className])}>
            
        </input>
    )
}