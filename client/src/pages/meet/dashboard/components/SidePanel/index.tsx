import * as React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {
  InfoOutlined,
  ChatOutlined,
  PeopleOutlineOutlined,
  Close,
  AssessmentOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import loadable from "@loadable/component";
import { useAppSelector } from "core/hooks/redux";
import { useStyles } from "./useStyles";

const Chat = loadable(() => import("./ChatBox"), {
  fallback: <LinearProgress />,
});
const Participants = loadable(() => import("./Participants"), {
  fallback: <LinearProgress />,
});
const MeetInfo = loadable(() => import("./Info"), {
  fallback: <LinearProgress />,
});
const Polls = loadable(() => import("./Polls"), {
  fallback: <LinearProgress />,
});
const LockMeet = loadable(() => import("./LockMeet"), {
  fallback: <LinearProgress />,
});

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const { participants, meetDetails, poll, chat } = useAppSelector((state) => ({
    ...state.meetReducer,
    ...state.chatReducer,
  }));

  const handleIconPress = (key: number) => () => {
    if (!open) {
      setOpen(true);
    } else if (open && key === index) {
      setOpen(false);
    }
    setIndex(key);
  };

  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        elevation={0}
        classes={{
          paper: classes.drawerPaper,
        }}
        style={{ width: "460px" }}
        onClose={() => setOpen(false)}
        ModalProps={{
          hideBackdrop: true,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {["Meeting Details", "People", "In-call messages", "Polls"][index]}
          </Typography>
          <IconButton aria-label="" onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Box p={1}>
          {(() => {
            switch (index) {
              case 0:
                return <MeetInfo />;
              case 1:
                return (
                  <Participants
                    isHost={meetDetails.isHost}
                    participants={participants}
                  />
                );
              case 2:
                return <Chat />;
              case 3:
                return <Polls isHost={meetDetails.isHost} />;
              default:
                return null;
            }
          })()}
        </Box>
      </Drawer>

      <Box className={classes.controller}>
        <Tooltip title="Meet Info">
          <IconButton
            onClick={handleIconPress(0)}
            className={clsx(open && index === 0 && classes.selected)}
          >
            <InfoOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Participants">
          <IconButton
            onClick={handleIconPress(1)}
            className={clsx(open && index === 1 && classes.selected)}
          >
            <Badge
              badgeContent={
                Object.values(participants).filter(({ isAvail }) => isAvail)
                  .length + 1
              }
              color="primary"
            >
              <PeopleOutlineOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Chats">
          <IconButton
            onClick={handleIconPress(2)}
            className={clsx(open && index === 2 && classes.selected)}
          >
            <Badge color="primary" variant="dot" invisible={!chat.length}>
              <ChatOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Polls">
          <IconButton
            onClick={handleIconPress(3)}
            className={clsx(open && index === 3 && classes.selected)}
          >
            <Badge color="primary" variant="dot" invisible={!poll.question}>
              <AssessmentOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        {(meetDetails.isHost || process.env.NODE_ENV === "development") && (
          <LockMeet />
        )}
      </Box>
    </>
  );
};
export default React.memo(SideBar);
