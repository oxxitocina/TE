import classNames from "classnames";
import cls from "./ErrorPage.module.css";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  return <div className={classNames(cls.ErrorPage, {}, [className])}></div>;
};
