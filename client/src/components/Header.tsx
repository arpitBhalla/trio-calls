import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth, updateDisplayName } from "core/reducers/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import { toggleDarkMode } from "core/reducers/theme";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

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
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Header: React.FC<HeaderProps> = ({
  elevation = 5,
  toolBarBottomMargin = 10,
}) => {
  const classes = useStyles({ toolBarBottomMargin });
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);
  const [newDisplayName, setNewDisplayName] = React.useState("");
  const [profileDialog, setProfileDialog] = React.useState(false);
  const { displayName, useDark } = useAppSelector(
    ({ authReducer: { displayName }, themeReducer: { useDark } }) => ({
      displayName,
      useDark,
    })
  );

  const handleMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogout: React.MouseEventHandler<HTMLLIElement> = () => {
    localStorage.clear();
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
        <Logo size={4} />
        <Typography variant="h6" color="primary" className={classes.headerText}>
          Trio Calls
        </Typography>
        <Tooltip title="Toggle Theme (Alt+t)">
          <IconButton
            accessKey="t"
            aria-label="toggle theme"
            onClick={handleToggleTheme}
          >
            {!useDark ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="My Account">
          <Chip
            label={displayName}
            color={"default"}
            variant="outlined"
            onClick={handleMenu}
          />
        </Tooltip>
      </Toolbar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenu}
      >
        <MenuItem onClick={() => setProfileDialog(true)}>
          <AccountCircleOutlinedIcon
            className={classes.icon}
            fontSize="small"
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon className={classes.icon} fontSize="small" />
          Logout
        </MenuItem>
      </Menu>
      <Dialog
        open={profileDialog}
        onClose={() => setProfileDialog(false)}
        aria-labelledby="profile dialog"
      >
        <DialogTitle>My Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              label="Display Name"
              variant="outlined"
              defaultValue={displayName}
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(updateDisplayName(newDisplayName));
              setProfileDialog(false);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};
export default Header;
