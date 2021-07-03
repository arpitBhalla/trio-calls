import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  List,
  ListItem,
  ListSubheader,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const App: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <List>
      <ListSubheader>
        <Typography variant="caption" color="textSecondary">
          <b>In Call</b>
        </Typography>
      </ListSubheader>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>A</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="body1" color="textSecondary">
              <b>Arpit (You)</b>
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip title={1 ? "Mute" : "Unmute"}>
            <IconButton aria-label="">
              {1 ? <MicNoneOutlinedIcon /> : <MicOffOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove">
            <IconButton aria-label="">
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
export default App;
