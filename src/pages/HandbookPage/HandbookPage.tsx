import classNames from "classnames"
import cls from './HandbookPage.module.css'
import { TopicsSection } from "./Components/TopicsSection/TopicsSection"
import { Disclosure } from '@headlessui/react'
import ChevronUpIcon from '@/assets/svg/chevron-up.svg?react'
import ChevronDownIcon from '@/assets/svg/chevron-down.svg?react'
import { Button } from "@/common/Button/Button"

interface HandbookProps {
    className?: string
}

export const HandbookPage = ({className}: HandbookProps) => {
  return (
    <div className={classNames(cls.handbook, {}, [className])}>
      <TopicsSection/>

      
    <div className={cls.accordion}>
      <div className={cls.accordion_wrapper}>
        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>
                    <Button>1</Button>
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

        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>What is your refund policy?</span>
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

        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>What is your refund policy?</span>
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

        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>What is your refund policy?</span>
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

        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>What is your refund policy?</span>
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

        <div className={cls.panel_wrapper}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={cls.accordion_button}>
                  <span>What is your refund policy?</span>
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

        
      </div>
    </div>

    </div>
  )
}



