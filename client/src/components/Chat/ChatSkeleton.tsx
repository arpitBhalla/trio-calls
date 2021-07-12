import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Skeleton from "@material-ui/lab/Skeleton";

export const ChatParticipantSkeleton: React.FC = () => (
  <ListItem>
    <ListItemAvatar>
      <Skeleton variant="circle" width={40} height={40} />
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography
          style={{ display: "flex", justifyContent: "space-between" }}
          variant="subtitle2"
          color="textSecondary"
        >
          <Skeleton width={80} />
          <Skeleton width={40} />
        </Typography>
      }
      secondary={
        <Typography variant="caption">
          <Skeleton />
        </Typography>
      }
    />
  </ListItem>
);

export const ChatMsgSkeleton: React.FC = () => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography
            style={{ display: "flex", justifyContent: "space-between" }}
            variant="caption"
            color="primary"
          >
            <Skeleton width={70} />
            <Skeleton width={50} />
          </Typography>
        }
        secondary={<Skeleton variant="rect" height={30} />}
      />
    </ListItem>
  );
};
