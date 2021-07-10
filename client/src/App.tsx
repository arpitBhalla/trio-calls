import React from "react";
import store from "core/store";
import Routes from "pages";
import ThemeProvider from "core/provider/ThemeProvider";
import { useTitle } from "core/hooks/common";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "core/provider/SocketProvider";

const App: React.FC = () => {
  useTitle();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <SnackbarProvider preventDuplicate maxSnack={3}>
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
