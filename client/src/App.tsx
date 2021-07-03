import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./core/theme";
import { SnackbarProvider } from "notistack";
import store from "core/store";
import { Provider as ReduxProvider } from "react-redux";
import { useTitle } from "core/hooks/common";
import Routes from "./pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  useTitle();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
export default App;
