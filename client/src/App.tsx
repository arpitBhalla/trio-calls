import React from "react";
import store from "core/store";
import theme from "core/theme";
import Routes from "pages";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTitle } from "core/hooks/common";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "core/provider/socket";

const App: React.FC = () => {
  useTitle();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <SocketProvider>
              <Routes />
            </SocketProvider>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};
export default App;
