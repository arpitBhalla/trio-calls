import React from "react";
/**
 * Defines Document Title
 */
export const useTitle = (title?: string): void => {
  React.useEffect(() => {
    document.title = [title || "", "Microsoft Teams"].join(title ? " | " : "");
  }, [title]);
};
/**
 * Listens the document visibility
 */
export const useDocVisible = (): boolean => {
  const isVisible = () => document.visibilityState === "visible";
  const [visible, setVisible] = React.useState(isVisible());
  React.useEffect(() => {
    const onVisible = () => setVisible(isVisible());
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);
  return visible;
};
/**
 * Save & Load item to localStorage
 */
export const useStateStorage = <TType>(
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
/**
 * Listens to window focus
 */
export const useWndFocus = (): boolean => {
  const [focus, setFocus] = React.useState(document.hasFocus());
  React.useEffect(() => {
    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(false);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);
  return focus;
};
