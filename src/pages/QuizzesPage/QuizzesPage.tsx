import classNames from "classnames";
import cls from "./QuizzesPage.module.css";
import { useParams } from "react-router-dom";
import { useRequestQuestionsQuery } from "@/setup/api";
import { Quiz } from "./Components/Quiz/Quiz";
import { processQuestions } from "@/setup/helpers/processQuestions";
import { Spinner } from "@/common/Spinner/Spinner";

interface QuizzesPageProps {
  className?: string;
}

export const QuizzesPage = ({ className }: QuizzesPageProps) => {
  const { topicName } = useParams();
  const topic = topicName as string;
  // const { isLoading, data } = useRequestQuestionsQuery({ topic });
  const isLoading = false;
  const data =
    "1. What is the purpose of an operating system?\na) To control and manage the hardware resources of a computer\nb) To create documents and perform calculations\nc) To connect to the internet and browse websites\nd) None of the above\n\n2. What is the difference between RAM and ROM?\na) RAM is volatile memory, while ROM is non-volatile memory\nb) RAM stores data permanently, while ROM stores data temporarily\nc) RAM is used for long-term storage, while ROM is used for temporary storage\nd) None of the above\n\n3. What is the function of a motherboard?\na) To provide power to the computer components\nb) To connect all the computer components together\nc) To control the flow of data between the computer and its peripherals\nd) None of the above\n\n4. What is the purpose of a graphics card?\na) To display images and videos on the computer monitor\nb) To connect the computer to a network\nc) To store and retrieve data from the hard drive\nd) None of the above\n\n5. What is the role of a compiler in programming?\na) To convert source code into machine code\nb) To execute the program and produce the desired output\nc) To debug and fix errors in the program\nd) None of the above\n\n6. What is the function of a hard drive?\na) To store and retrieve data on a long-term basis\nb) To perform calculations and process data\nc) To connect the computer to external devices\nd) None of the above\n\n7. What is the purpose of an input device?\na) To display output on the computer monitor\nb) To allow the user to interact with the computer and input data\nc) To store and retrieve data from the computer's memory\nd) None of the above\n\n8. What is the difference between software and hardware?\na) Software refers to physical components, while hardware refers to programs and instructions\nb) Software is tangible, while hardware is intangible\nc) Software is a set of instructions that tell the computer what to do, while hardware refers to the physical components of a computer\nd) None of the above\n\n9. What is the role of a mouse in computer navigation?\na) To display images and videos on the computer monitor\nb) To connect the computer to a network\nc) To move the cursor on the screen and select objects\nd) None of the above\n\n10. What is the purpose of an antivirus software?\na) To protect the computer from malware and viruses\nb) To create documents and perform calculations\nc) To connect to the internet and browse websites\nd) None of the above\n\n[0, 1, 2, 3, 0, 0, 1, 2, 0, 0]";

  // const processedData =
  //   isLoading === false
  //     ? processQuestions(data?.data?.choices[0]?.message?.content)
  //     : null;

  const processedData = isLoading === false ? processQuestions(data) : null;

  return (
    <div className={classNames(cls.quizzes_page, {}, [className])}>
      {isLoading === true ? <Spinner /> : <Quiz data={processedData} />}
    </div>
  );
};
