import  classNames from 'classnames'
import cls from './SearchBar.module.css'

interface SearchBarProps {
    className?: string
}

export const SearchBar = ({className}: SearchBarProps) => {
  return (
    <div className={classNames(cls.searchBar, {}, [className])}>
        
    </div>
  )
}



