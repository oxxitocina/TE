import { BASE_URL, API_KEY } from "../instance"

export async function requestByTopicData(topic = 'white shark') {
    const responseInfo = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": `Write to me about ${topic} using headlines and number and a dot. Write exactly 5 subtopics. Each subtopic must contain at least 200 words. Do not repeat. Subtopics must always end with ':::'. For example:
  
          1. Anatomy of white sharks:::
          They have powerful fins. They swim fast
          
          2. The life of white sharks:::
          They live in the ocean and do not know fear. They are afraid to turn over`}],
          "temperature": 0.7
      })
    })

    const resultInfo = await responseInfo.json()
    console.log(resultInfo.choices[0].message)
    return resultInfo.choices[0].message
}