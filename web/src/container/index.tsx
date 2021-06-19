import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "core/store";
import ThemeProvider from "./Theme";
import { AppBar } from "components";
import { useSetTitle } from "core/hooks/common";
import { BrowserRouter } from "react-router-dom";

const App: React.FunctionComponent = () => {
  useSetTitle();

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <AppBar />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
