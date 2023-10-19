import classNames from "classnames";
import cls from "./Button.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ACCENT = "accent",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...other } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
