import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Join from "./pages/meet/Meet";
import theme from "./core/theme";
import { SnackbarProvider } from "notistack";
import store from "core/store";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Join />
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
export default App;
