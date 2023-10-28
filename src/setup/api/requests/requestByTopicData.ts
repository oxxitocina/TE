import { makeRequest } from "../instance";

export const requestByTopicData = (topic = "white shark") => {
  return makeRequest({
    method: "post",
    data: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write to me about ${topic} using headlines and number and a dot. Write exactly 6 subtopics.Do not repeat. Subtopics must always end with ':::'. Write a little text. For example:
  
        1. Anatomy of white sharks:::
        They have powerful fins. They swim fast
        
        2. The life of white sharks:::
        They live in the ocean and do not know fear. They are afraid to turn over`,
        },
      ],
      temperature: 0.7,
    }),
  });
};

