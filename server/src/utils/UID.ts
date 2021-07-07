/**
 * @author Arpit Bhalla
 */

/**
 * Generate Random ID of 4 digits
 */
const randomID = () =>
  Math.floor(Math.random() * 1e6)
    .toString(36)
    .padStart(4, "0");

/**
 * Generate Meeting ID xxxx-xxxx-xxxx
 */
export const generateID = () => [...Array(3)].map(randomID).join("-");

/**
 * Convert xxxxxxxxxxxx to xxxx-xxxx-xxxx
 */
export const stringToID = (str: string) => str.match(/.{1,4}/g)?.join("-");

/**
 * Check if str is in form xxxx-xxxx-xxxx
 */
export const isID = (str: string) => /(\w+){4}-(\w+){4}-(\w+){4}/.test(str);
