import * as React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

type Props = { title?: string };

const ChatHeader: React.FC<Props> = ({ title }) => {
  return (
    <AppBar elevation={0} position="static" color="primary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <Typography variant="h6">
              <b>Messages</b>
            </Typography>
          </Grid>
          <Grid item sm={8} style={{ display: "flex", alignItems: "center" }}>
            <Avatar style={{ margin: 10 }}>
              {(title || " ")[0].toUpperCase()}
            </Avatar>
            <Typography variant="h6">{title}</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default React.memo(ChatHeader);
