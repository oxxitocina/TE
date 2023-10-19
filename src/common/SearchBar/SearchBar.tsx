import classNames from "classnames";
import cls from "./SearchBar.module.css";
import SearchIcon from "@/assets/svg/search.svg";
import { useRef } from "react";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={classNames(cls.searchBar, {}, [className])}
      onClick={handleClick}
    >
      <form onSubmit={handleSubmit}>
        <button type="submit" className={cls.iconButton}>
          <img src={SearchIcon} />
        </button>
        <input ref={ref} className={cls.search} placeholder="Search"></input>
      </form>
    </div>
  );
};
