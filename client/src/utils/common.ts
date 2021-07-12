import React from "react";

/**
 * Convert xxxxxxxxxxxx to xxxx-xxxx-xxxx
 */
export const stringToMeetID = (str: string): string =>
  !isValidMeetID(str) ? str.match(/.{1,4}/g)?.join("-") || str : str;

/**
 * Check if str is in form xxxx-xxxx-xxxx
 */
export const isValidMeetID = (str: string): boolean =>
  /^(\w+){4}-(\w+){4}-(\w+){4}$/.test(str);

/**
 * Copy to clipboard
 */
export const CopyToClipboard = function (text: string): unknown {
  return navigator.clipboard.writeText(text);
};

export const setStateHandler =
  (
    setState: React.Dispatch<React.SetStateAction<string>>
  ): React.ChangeEventHandler<unknown> =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

export const getRandomColor = (isDark?: boolean): string => {
  const letters = (isDark ? "BCDEF" : "456789").split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const dateToTime = (str?: string): string =>
  new Date(str || Date.now()).toLocaleTimeString("en-IN", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });
