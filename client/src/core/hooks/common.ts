import React from "react";
/**
 * Defines Document Title
 */
export const useTitle = (title?: string): void => {
  React.useEffect(() => {
    document.title = [title || "", "Trio Calls"].join(title ? " | " : "");
  }, [title]);
};
/**
 * Save & Load item to localStorage
 */
export const useLocalStorage = <TType>(
  key: string,
  defaultValue: TType
): [TType, (newValue: TType) => void] => {
  const [value, setState] = React.useState(defaultValue);

  React.useEffect(() => {
    const store = localStorage.getItem(key);
    if (store != null) {
      try {
        setState(JSON.parse(store) as TType);
      } catch (err) {
        localStorage.removeItem(key);
      }
    }
  }, [key]);

  const setValue = React.useCallback(
    (newValue: TType) => {
      setState(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, setValue];
};
