import React from "react";
import { Provider } from "react-redux";
import {} from "@fluentui/react";
import store from "./app/store";
import Theme from "./Theme";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Theme />
    </Provider>
  );
};

export default App;
