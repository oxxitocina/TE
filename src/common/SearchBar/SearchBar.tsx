import classNames from "classnames";
import cls from "./SearchBar.module.css";
import SearchIcon from "@/assets/svg/search.svg";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Routes } from "@/setup/consts/routes/routes";


interface SearchBarProps {
  className?: string;
}

interface Input {
  search: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset
  } = useForm<Input>()


  const onSubmit: SubmitHandler<Input> = (data) => {
    navigate(`/handbook/${data.search}`)
    reset()
  }


  return (
    <div
      className={classNames(cls.searchBar, {}, [className])}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit" className={cls.iconButton}>
          <img src={SearchIcon} />
        </button>
        <input className={cls.search} placeholder="Search" {...register("search", {required: true})}>
          </input>
      </form>
    </div>
  );
};
