import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "app/store";
import ThemeProvider from "./Theme";
import { AppBar } from "components";
import { useSetTitle } from "app/hooks/common";

const App: React.FunctionComponent = () => {
  useSetTitle();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <AppBar />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
