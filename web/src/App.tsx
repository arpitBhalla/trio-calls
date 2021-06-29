import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "core/store";
// import { AppBar } from "components";
import { useTitle } from "core/hooks/common";
import { ThemeProvider } from "@fluentui/react";
import { BrowserRouter } from "react-router-dom";

const App: React.FunctionComponent = () => {
  useTitle();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ThemeProvider>{/* <AppBar /> */}sdgf</ThemeProvider>
        </BrowserRouter>
      </ThemeProvider>
      ;
    </ReduxProvider>
  );
};

export default App;

const theme = {
  name: "Blue",
  isInverted: true,
  backgroundImageUri: "",
  palette: {
    themePrimary: "#6b69d6",
    themeLighterAlt: "#f8f7fd",
    themeLighter: "#f0f0fb",
    themeLight: "#e1e1f7",
    themeTertiary: "#c1c0ee",
    themeSecondary: "#7a78da",
    themeDarkAlt: "#5250cf",
    themeDark: "#3230b0",
    themeDarker: "#27268a",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#a6a6a6",
    neutralSecondaryAlt: "#767676",
    neutralSecondary: "#666666",
    neutralPrimary: "#333",
    neutralPrimaryAlt: "#3c3c3c",
    neutralDark: "#212121",
    black: "#000000",
    white: "#fff",
    primaryBackground: "#fff",
    primaryText: "#333",
    accent: "#038387",
  },
};
