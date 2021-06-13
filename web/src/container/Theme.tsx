import * as React from "react";
import { Provider as ThemeProvider } from "@fluentui/react-northstar";
import { useAppSelector } from "app/hooks/redux";

export const ThemeProviderWrapper: React.FunctionComponent = ({ children }) => {
  const theme = useAppSelector((s) => s.themeReducer.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
