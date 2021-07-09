import React from "react";
import ReactDOM from "react-dom";
import App from "pages/meet/components/Sketch";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "production") {
  reportWebVitals(console.log);
}
