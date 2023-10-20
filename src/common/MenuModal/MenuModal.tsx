import classNames from "classnames"
import cls from './MenuModal.module.css'
import { Portal } from "../Portal/Portal"
import { IconButton } from "../IconButton/IconButton"
import CloseIcon from '@/assets/svg/x.svg?react'
import { useTheme } from "@/setup/providers/ThemeProvider"

interface MenuModalProps {
    className?: string
    onClose: () => void
}

export const MenuModal = ({className, onClose}: MenuModalProps) => {
  const { theme } = useTheme()

  return (
    <Portal>
        <div className={classNames(cls.menu_modal, {}, [className, theme])}>
          <div className={cls.close_icon_wrapper}>
              <IconButton onClick={onClose}><CloseIcon/></IconButton>
          </div>
          
        </div>
    </Portal>
  )
}



