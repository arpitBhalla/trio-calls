import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth } from "core/actions/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";

type HeaderComponentProps = {
  elevation?: number;
  toolBarBottomMargin?: number;
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: ({ toolBarBottomMargin }: { toolBarBottomMargin: number }) =>
      theme.spacing(toolBarBottomMargin),
  },
  headerText: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
  },
}));

const ActiveUserComponent: React.FC<HeaderComponentProps> = ({
  elevation = 5,
  toolBarBottomMargin = 10,
}) => {
  const classes = useStyles({ toolBarBottomMargin });
  const dispatch = useAppDispatch();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);

  const handleClick = () => {
    dispatch(
      updateAuth({ isAuth: false, displayName: "", UID: "", email: "" })
    );
  };

  return (
    <AppBar
      elevation={elevation}
      position="static"
      color="transparent"
      className={classes.appBar}
    >
      <Toolbar>
        <Logo size={5} />
        <Typography variant="h6" color="primary" className={classes.headerText}>
          Microsoft Teams
        </Typography>
        <Tooltip title="Logout">
          <Chip
            label={displayName}
            color={"default"}
            variant="outlined"
            onClick={handleClick}
            avatar={<PowerSettingsNewIcon color="error" />}
          />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
export default ActiveUserComponent;
