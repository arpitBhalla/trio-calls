import React from "react";

export const useTitle = (title?: string): void => {
  React.useEffect(() => {
    document.title = [title || "", "Microsoft Teams"].join(title ? " | " : "");
  }, [title]);
};
