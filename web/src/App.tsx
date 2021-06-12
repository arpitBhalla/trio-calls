import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.css";

const App: React.FunctionComponent = () => {
  return <Provider store={store}></Provider>;
};

export default App;
