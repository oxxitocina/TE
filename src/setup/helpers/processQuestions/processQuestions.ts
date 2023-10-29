export const processQuestions = (text: string) => {
  let arr = text.split(/\d+\./g);
  arr = arr.filter((item) => item.length > 1);
  arr = arr.map((item) => {
    const parts = item.split(/(?=a\)|b\)|c\)|d\))/);
    const answers = parts
      .slice(1)
      .map((option) => option.replace(/^[a-d]\)/, "").trim());
    return {
      question: parts[0].trim(),
      answers,
    };
  });

  arr.pop();

  const lastArrayMatch = text.match(/\[\d+(?:, \d+)*\]$/);
  const lastArray = JSON.parse(lastArrayMatch[0]);

  return {
    questions: arr,
    correctAnswers: lastArray,
  };
};
