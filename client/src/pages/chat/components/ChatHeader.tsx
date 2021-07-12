import * as React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import VoiceChatOutlinedIcon from "@material-ui/icons/VoiceChatOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

type Props = { title?: string; meetID: string };

const ChatHeader: React.FC<Props> = ({ title, meetID }) => {
  const history = useHistory();

  return (
    <AppBar elevation={0} position="static" color="primary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <Typography variant="h6">
              <b>Messages</b>
            </Typography>
          </Grid>
          {title && (
            <Grid item sm={8} style={{ display: "flex", alignItems: "center" }}>
              <Avatar style={{ margin: 10 }}>
                {(title || " ")[0].toUpperCase()}
              </Avatar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                {title}
              </Typography>
              <Tooltip title="Start Video Call">
                <IconButton
                  aria-label="call"
                  onClick={() => {
                    history.push("/" + meetID);
                  }}
                >
                  <VoiceChatOutlinedIcon style={{ color: "white" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default React.memo(ChatHeader);
