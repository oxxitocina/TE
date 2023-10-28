import { useQuery } from "react-query";
import { requestByQuestions } from "../requests/requesByTopicQuestions";

interface useRequestQuestionsQueryParams {
  topic: string;
}

export const useRequestQuestionsQuery = ({
  topic,
}: useRequestQuestionsQueryParams) =>
  useQuery(["openai_question", topic], () => requestByQuestions(topic));
