export const stringToMeetID = (str: string) => str.match(/.{1,4}/g)?.join("-");

export const isValidMeetID = (str: string) =>
  /(\w+){4}-(\w+){4}-(\w+){4}/.test(str);
