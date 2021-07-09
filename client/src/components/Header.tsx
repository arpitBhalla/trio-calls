import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth } from "core/reducers/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import { toggleDarkMode } from "core/reducers/theme";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

type HeaderProps = {
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

const Header: React.FC<HeaderProps> = ({
  elevation = 5,
  toolBarBottomMargin = 10,
}) => {
  const classes = useStyles({ toolBarBottomMargin });
  const dispatch = useAppDispatch();
  const { displayName, useDark } = useAppSelector(
    ({ authReducer: { displayName }, themeReducer: { useDark } }) => ({
      displayName,
      useDark,
    })
  );

  const handleClick = () => {
    dispatch(
      updateAuth({ isAuth: false, displayName: "", UID: "", email: "" })
    );
  };
  const handleToggleTheme = () => {
    dispatch(toggleDarkMode(null));
  };
  return (
    <AppBar
      elevation={elevation}
      position="static"
      color="inherit"
      className={classes.appBar}
    >
      <Toolbar>
        <Logo size={5} />
        <Typography variant="h6" color="primary" className={classes.headerText}>
          Microsoft Teams
        </Typography>
        <IconButton aria-label="toggle theme" onClick={handleToggleTheme}>
          {!useDark ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
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
export default Header;
