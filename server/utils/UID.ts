const randomID = () =>
  Math.floor(Math.random() * 1e6)
    .toString(36)
    .padStart(4, "0");

export const generateID = () => [...Array(3)].map(randomID).join("-");

export const stringToID = (str: string) => str.match(/.{1,4}/g)?.join("-");

export const isID = (str: string) => /(\w+){4}-(\w+){4}-(\w+){4}/.test(str);
