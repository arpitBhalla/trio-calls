import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Join from "./pages/Join";
import theme from "./core/theme";
import { SnackbarProvider } from "notistack";
import store from "core/store";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Join />
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
export default App;
