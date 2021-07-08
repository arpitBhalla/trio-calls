import React from "react";

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
