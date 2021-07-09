import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { register } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "production") {
  reportWebVitals(console.log);
  register({});
}
