import React from "react";
import store from "core/store";
import { useTitle } from "core/hooks/common";
import { SnackbarProvider } from "notistack";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "core/provider/SocketProvider";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Routes = loadable(() => import("pages"), {
  fallback: <LinearProgress />,
});
export const ThemeProvider = loadable(
  () => import("core/provider/ThemeProvider"),
  {
    fallback: <LinearProgress />,
  }
);

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
