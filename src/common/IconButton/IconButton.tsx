import classNames from "classnames";
import cls from "./IconButton.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum IconButtonSize {
  S = "small",
  M = "medium",
  L = "large",
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: IconButtonSize;
}

export const IconButton = (props: IconButtonProps) => {
  const { className, children, size = IconButtonSize.M, ...other } = props;

  return (
    <button
      className={classNames(cls.IconButton, {}, [className, cls[size]])}
      {...other}
    >
      {children}
    </button>
  );
};
