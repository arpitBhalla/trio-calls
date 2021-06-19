import React from "react";
import { AppBar } from "components";
import { BrowserRouter } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AppBar />
    </BrowserRouter>
  );
};

export default App;
