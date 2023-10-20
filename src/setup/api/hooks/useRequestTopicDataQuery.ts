import { useQuery } from "react-query";
import { requestByTopicData } from "../requests/requestByTopicData";

interface useRequestTopicDataQueryParams {
    topic: string
}

export const useRequestTopicDataQuery = ({topic}: useRequestTopicDataQueryParams) => 
    useQuery(['openai', topic], () => requestByTopicData(topic))

