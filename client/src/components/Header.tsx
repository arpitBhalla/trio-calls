import { makeStyles } from "@material-ui/core/styles";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth } from "core/actions/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";

type ActiveUserComponentProps = {
  color?: ChipProps["color"];
};

const useStyles = makeStyles((theme) => ({
  headerText: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
  },
}));

const ActiveUserComponent: React.FC<ActiveUserComponentProps> = ({
  color = "default",
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { displayName } = useAppSelector(({ authReducer }) => authReducer);

  const handleClick = () => {
    dispatch(
      updateAuth({ isAuth: false, displayName: "", UID: "", email: "" })
    );
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Logo size={4} />
        <Typography variant="h6" color="primary" className={classes.headerText}>
          Microsoft Teams
        </Typography>
        <Tooltip title="Logout">
          <Chip
            label={displayName}
            color={color}
            variant="outlined"
            onClick={handleClick}
            avatar={<PowerSettingsNewIcon />}
          />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
export default ActiveUserComponent;
