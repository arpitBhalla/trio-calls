import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6264A7",
    },
    secondary: {
      main: "#6264A7",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        // @ts-ignore
        "@font-face": ["Open Sans"],
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Ubuntu", '"Segoe UI"', "Roboto"].join(","),
  },
});

export default theme;
