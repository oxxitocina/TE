import { makeRequest } from "../instance";

export const requestByQuestions = (topic = "white shark") => {
  return makeRequest({
    method: "post",
    data: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write me a quiz of ten questions with four possible answers about ${topic} with different answers. Dont specify correct answers. The question should always start with a number and a dot. At the end of the response provide an js array with the index of right answers for each question.Example: 1. What is the main selling point of Romanovsky Products' sandwiches?\na) They are made with only the freshest ingredients and are always packed with flavor\nb) They are the cheapest sandwiches on the market\nc) They are pre-made and ready to go\nd) None of the above 2. What is the main selling point of Romanovsky Products' sandwiches?\na) They are made with only the freshest ingredients and are always packed with flavor\nb) They are the cheapest sandwiches on the market\nc) They are pre-made and ready to go\nd) None of the above [2, 0]`,
        },
      ],
      temperature: 0.7,
    }),
  });
};
