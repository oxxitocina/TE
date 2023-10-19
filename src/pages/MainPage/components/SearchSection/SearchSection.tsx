import classNames from "classnames"
import cls from './SearchSection.module.css'
import { SearchBar } from "@/common/SearchBar/SearchBar";

interface SearchSectionProps {
    className?: string
}

export const SearchSection = ({className}: SearchSectionProps) => {
  return (
    <div className={classNames(cls.search_section, {}, [className])}>
        <div className={cls.topic}>
                Want to try?
            </div>
            <div className={cls.seach_wrapper}>
                <div className={cls.text}>
                    Start typing your question
                </div>
                <div className={cls.searchbar_wrapper}>
                    <SearchBar/>
                </div>
            </div>
    </div>
  )
}



