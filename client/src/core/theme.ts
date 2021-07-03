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
        "@font-face": ["Ubuntu"],
      },
    },
  },
});

export default theme;
