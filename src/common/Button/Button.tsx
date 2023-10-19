import classNames from "classnames";
import cls from "./Button.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ACCENT = "accent",
  CLEAR = "clear",
}
export enum ButtonSize {
  DEFAULT = 'default',
  S = 'small',
  M = 'medium',
  L = 'large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.PRIMARY, size = ButtonSize.DEFAULT, ...other } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
      {...other}
    >
      {children}
    </button>
  );
};
