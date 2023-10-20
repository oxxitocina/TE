import classNames from "classnames"
import cls from './DataSection.module.css'
import { Disclosure } from '@headlessui/react'
import ChevronUpIcon from '@/assets/svg/chevron-up.svg?react'
import ChevronDownIcon from '@/assets/svg/chevron-down.svg?react'
import { Button, ButtonSize } from "@/common/Button/Button"
import { useRequestTopicDataQuery } from "@/setup/api"

interface DataSectionProps {
    className?: string
    topic: string
}

export const DataSection = ({className, topic}: DataSectionProps) => {
    const arr = [0, 1, 2, 3, 4, 5]
    const { isLoading, data } = useRequestTopicDataQuery({topic})
    console.log(`is loading? ${isLoading}`)
    console.log(data?.choices[0]?.message?.content)

  return (
    <div className={classNames(cls.data_section, {}, [className])}>

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
  )
}



