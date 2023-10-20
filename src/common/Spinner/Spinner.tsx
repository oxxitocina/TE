import classNames from "classnames";
import cls from "./Spinner.module.css";
import { Portal } from "../Portal/Portal";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {

  return (
    <Portal>
        <div className={classNames(cls.spinner, {}, [className])}>
            <div className={cls.spinner_wrapper}>
            <div className={cls.lds_ring}><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </Portal>
  );
};
