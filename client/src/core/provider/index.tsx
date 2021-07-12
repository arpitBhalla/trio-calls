import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

export const ThemeProvider = loadable(() => import("./ThemeProvider"), {
  fallback: <LinearProgress />,
});

export const SocketProvider = loadable(() => import("./SocketProvider"), {
  fallback: <LinearProgress />,
});
