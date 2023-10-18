import classNames from "classnames"
import cls from './Header.module.css'
import { SearchBar } from "@/common/SearchBar/SearchBar"

interface HeaderProps {
    className?: string
}

export const Header = ({className}: HeaderProps) => {
  return (
    <div className={classNames(cls.header, {}, [className])}>
        <div className="logo">BrainWave</div>
        <div className="search-wrapper">
          <SearchBar/>
        </div>
        <div className="wrapper">
          <ul>
            <li>Home</li>
            <li>Login</li>
          </ul>
        </div>
    </div>
  )
}



