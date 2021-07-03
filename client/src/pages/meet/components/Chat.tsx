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
        <ListItemText
          primary={
            <Typography variant="caption" color="textSecondary">
              <b>Arpit (You)</b>
            </Typography>
          }
          secondary={
            <Typography variant="body1" color="textSecondary">
              <b>Meow</b>
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <ListItemText
            secondary={
              <Typography variant="caption" color="textSecondary">
                <b>{new Date().toLocaleTimeString()}</b>
              </Typography>
            }
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
export default App;
