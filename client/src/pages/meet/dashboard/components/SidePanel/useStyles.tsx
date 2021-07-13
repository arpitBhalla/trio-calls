import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sideBarContent: {},
  controller: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
  drawerPaper: {
    minWidth: "350px",
    maxWidth: "350px",
    padding: theme.spacing(2),
    height: "84%",
    top: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: `0px 0px 30px 1px  ${
      theme.palette.type === "dark" ? "#0e0c0c" : "#c2c2c2"
    }`,
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
}));
