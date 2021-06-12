import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { DefaultButton } from "@fluentui/react";
import store from "app/store";
import ThemeProvider from "./Theme";

const App: React.FunctionComponent = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <DefaultButton text="I'm a button" onClick={() => alert("hello!")} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
