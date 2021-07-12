import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  chatRoot: {
    overflowY: "auto",
    height: "60vh",
  },
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedListItem: {
    backgroundColor: theme.palette.action.hover,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
