import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import { useAppSelector } from "app/hooks/redux";

export const ThemeProviderWrapper: React.FunctionComponent = ({ children }) => {
  const theme = useAppSelector((s) => s.themeReducer.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
