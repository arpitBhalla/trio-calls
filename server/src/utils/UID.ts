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
export const generateID = (): string => [...Array(3)].map(randomID).join("-");
