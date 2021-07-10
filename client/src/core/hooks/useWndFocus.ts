import React from "react";

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
