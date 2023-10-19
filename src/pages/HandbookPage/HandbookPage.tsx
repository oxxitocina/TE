import classNames from "classnames"
import cls from './HandbookPage.module.css'
import { TopicsSection } from "./Components/TopicsSection/TopicsSection"
import { Disclosure } from '@headlessui/react'
import ChevronUpIcon from '@/assets/svg/chevron-up.svg?react'
import ChevronDownIcon from '@/assets/svg/chevron-down.svg?react'
import { Button, ButtonSize } from "@/common/Button/Button"

interface HandbookProps {
    className?: string
}

export const HandbookPage = ({className}: HandbookProps) => {
  const arr = [0, 1, 2, 3, 4, 5]
  const panels = arr.map(index =>
    <div className={cls.panel_wrapper}>
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={cls.accordion_button}>
            <span>
              <Button size={ButtonSize.S}>{index}</Button>
              What is your refund policy?</span>
            {open ? <ChevronDownIcon className={cls.chevron_icon}/> : <ChevronUpIcon className={cls.chevron_icon}/>}
          </Disclosure.Button>
          <Disclosure.Panel className={cls.panel}>
            If you're unhappy with your purchase for any reason, email us
            within 90 days and we'll refund you in full, no questions asked.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
    )

  return (
    <div className={classNames(cls.handbook, {}, [className])}>
      <TopicsSection/>

      
    <div className={cls.accordion}>
      <div className={cls.accordion_wrapper}>

        {arr.map(index =>
            <div className={cls.panel_wrapper}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={cls.accordion_button}>
                    <span>
                      <Button size={ButtonSize.S}>{index+1}</Button>
                      What is your refund policy?</span>
                    {open ? <ChevronDownIcon className={cls.chevron_icon}/> : <ChevronUpIcon className={cls.chevron_icon}/>}
                  </Disclosure.Button>
                  <Disclosure.Panel className={cls.panel}>
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          )}

      </div>
    </div>

    </div>
  )
}



