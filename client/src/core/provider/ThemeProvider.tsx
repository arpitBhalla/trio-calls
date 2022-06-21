import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { useAppSelector } from "core/hooks/redux";

const App: React.FC = ({ children }) => {
  const prefersDarkMode =
    useMediaQuery("(prefers-color-scheme: dark)") || false;
  const useDark = useAppSelector((state) => state.themeReducer.useDark);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main:
              prefersDarkMode || useDark ? deepPurple[400] : deepPurple[800],
          },
          secondary: {
            main: "#6264A7",
          },
          type: useDark ? "dark" : "light",
        },
        overrides: {
          MuiCssBaseline: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "@global": {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              "@font-face": ["Ubuntu"],
            },
          },
          MuiButton: {
            root: {
              textTransform: "none",
            },
          },
        },
        typography: {
          fontFamily: ["Ubuntu", "'Segoe UI'", "Roboto"].join(","),
        },
      }),
    [prefersDarkMode, useDark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default App;
