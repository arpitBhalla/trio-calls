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

// export const pipe =
//   (...funcs: unknown[]) =>
//   (arg) => {
//     funcs.reduce((val, func) => func(value), arg);
//   };

// pipe(
//   (e) => e + 2,
//   (e) => e - 3
// );

export const setStateHandler =
  (
    setState: React.Dispatch<React.SetStateAction<string>>
  ): React.ChangeEventHandler<unknown> =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
