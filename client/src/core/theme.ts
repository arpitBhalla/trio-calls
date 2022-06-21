import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: "#6264A7",
    },
  },
  overrides: {
    MuiCssBaseline: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "@global": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "@font-face": ["Ubuntu"],
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "'Segoe UI'", "Roboto"].join(","),
  },
});

export default theme;
