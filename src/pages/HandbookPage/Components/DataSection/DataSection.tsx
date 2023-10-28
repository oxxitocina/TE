import classNames from "classnames";
import cls from "./DataSection.module.css";
import { Disclosure } from "@headlessui/react";
import ChevronUpIcon from "@/assets/svg/chevron-up.svg?react";
import ChevronDownIcon from "@/assets/svg/chevron-down.svg?react";
import { useRequestTopicDataQuery } from "@/setup/api";
import { Spinner } from "@/common/Spinner/Spinner";
import { processText } from "@/setup/helpers/processText";

interface DataSectionProps {
  className?: string;
  topic: string;
}

export const DataSection = ({ className, topic }: DataSectionProps) => {
  const { isLoading, data } = useRequestTopicDataQuery({topic})
  const temp = isLoading === true ? null : processText(data?.data?.choices[0]?.message?.content);

  // const isLoading = false;
  // const temp = [
  //   [
  //     " Introduction to Computer System Level Hierarchy",
  //     "\nComputer system level hierarchy refers to the organization and structure of a computer system, which is composed of various layers or levels. Each level performs specific functions and interacts with other levels to ensure the efficient operation of the computer system.\n\n",
  //   ],
  //   [
  //     " Hardware Level",
  //     "\nAt the lowest level of computer system hierarchy is the hardware level. This level includes the physical components of a computer system, such as the central processing unit (CPU), memory modules, storage devices, input/output devices, and other peripherals. The hardware level is responsible for executing instructions and performing calculations.\n\n",
  //   ],
  //   [
  //     " Operating System Level",
  //     "\nSitting on top of the hardware level is the operating system level. This level provides a platform for software applications to run and manages system resources. The operating system controls the execution of programs, manages memory allocation, handles input/output operations, and ensures overall system stability and security.\n\n",
  //   ],
  //   [
  //     " Application Software Level",
  //     "\nAbove the operating system level is the application software level. This level comprises the software applications that users interact with to perform specific tasks or functions. Examples of application software include word processors, web browsers, media players, graphic design software, and database management systems. Application software utilizes the resources provided by the lower levels to fulfill user requirements.\n\n",
  //   ],
  //   [
  //     " User Interface Level",
  //     "\nThe user interface level is the layer that enables communication and interaction between users and the computer system. It provides a means for users to input commands, receive feedback, and access the functionalities of the applications. User interfaces can be graphical, command-line based, or even voice-activated, depending on the system and the target user experience.\n\n",
  //   ],
  //   [
  //     " Networking Level",
  //     "\nThe networking level encompasses the systems and protocols that allow computers to connect and communicate with each other. It enables data sharing, resource sharing, and collaboration among multiple computers within a network. Networking can occur within a local area network (LAN), a wide area network (WAN), or even over the internet, facilitating global connectivity and remote access to computer systems.\n\nUnderstanding the computer system level hierarchy provides a foundation for comprehending the inner workings of a computer system. Each level plays a critical role in ensuring the proper functioning of the system and enabling users to accomplish their tasks efficiently and effectively. By recognizing and appreciating this hierarchy, individuals can gain a deeper understanding of the complexity and interconnectedness of computer systems.",
  //   ],
  // ];

  return (
    <div className={classNames(cls.data_section, {}, [className])}>
      {isLoading && <Spinner />}

      <div className={cls.accordion_wrapper}>
        {temp &&
          temp.map((data, index) => (
            <div key={`${index}-key`} className={cls.panel_wrapper}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className={cls.accordion_button}>
                      <span>
                        <div className={cls.panel_count}>{index + 1}</div>
                        <p>{data[0]}</p>
                      </span>
                      {open ? (
                        <ChevronDownIcon className={cls.chevron_icon} />
                      ) : (
                        <ChevronUpIcon className={cls.chevron_icon} />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className={cls.panel}>
                      <p>{data[1]}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
      </div>
    </div>
  );
};
