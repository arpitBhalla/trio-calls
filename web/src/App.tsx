import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "core/store";
import Routes from "./pages";
import { useTitle } from "core/hooks/common";
import { ThemeProvider } from "@fluentui/react";
import theme from "core/theme";

const App: React.FunctionComponent = () => {
  useTitle();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
