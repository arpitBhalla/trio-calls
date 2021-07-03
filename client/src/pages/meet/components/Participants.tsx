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
import { VideoCall } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

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
          <IconButton aria-label="">
            <VideoCall />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
export default App;
