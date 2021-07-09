import * as React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

type Props = { a?: unknown };

const ChatHeader: React.FC<Props> = () => {
  return (
    <AppBar elevation={0} position="static" color="primary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <Typography variant="h6">
              <b>Messages</b>
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item sm={7} style={{ display: "flex", alignItems: "center" }}>
            <Avatar style={{ margin: 10 }}>A</Avatar>
            <Typography variant="h6">Arpit Bhalla</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default React.memo(ChatHeader);
