import ReactDOM from "react-dom";
import App from "./container";
import { mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";

mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
