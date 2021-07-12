if (process.env.NODE_ENV === "production") {
  console.log = function () {
    return;
  };
  console.warn = function () {
    return;
  };
  console.error = function () {
    return;
  };
}
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals(console.log);
