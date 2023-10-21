export const processText = (text: string) => {
  let arr = text.split(/\d+\./g);
  arr = arr.filter((item) => item.length > 1);
  const arr2 = arr.map((item) => item.split(/:::/));
  return arr2;
};
