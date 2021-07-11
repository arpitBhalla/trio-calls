import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import Linkify from "react-linkify";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  displayName?: string;
  message?: string;
  time?: string;
  isSelf?: boolean;
  hideAvatar?: boolean;
  hidePrimary?: boolean;
};

const useStyles = makeStyles(() => ({
  secondary: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ChatMessage: React.FC<Props> = ({
  displayName,
  message,
  time,
  isSelf,
  hidePrimary,
}) => {
  const classes = useStyles();
  return (
    <ListItem
      style={{
        padding: 2,
        marginBottom: hidePrimary ? 0 : 4,
      }}
    >
      <ListItemText
        style={{ margin: 0 }}
        primary={
          !hidePrimary && (
            <Typography
              className={classes.secondary}
              variant="caption"
              color="primary"
            >
              <b>
                {displayName} {isSelf && "(You)"}
              </b>
              <b>{time}</b>
            </Typography>
          )
        }
        secondary={
          <Typography variant="body2">
            <ReactMarkdown remarkPlugins={[gfm]}>{message || ""}</ReactMarkdown>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default React.memo(ChatMessage);
