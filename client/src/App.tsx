import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/:roomId" component={Video} />
    </Router>
  );
}
export default App;
