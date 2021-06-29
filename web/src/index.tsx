import ReactDOM from "react-dom";
import App from "./App";
import { mergeStyles } from "@fluentui/react-northstar";
import reportWebVitals from "./reportWebVitals";

mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
