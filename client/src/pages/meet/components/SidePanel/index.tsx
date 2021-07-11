import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {
  InfoOutlined,
  ChatOutlined,
  PeopleOutlineOutlined,
  Close,
  AssessmentOutlined,
  // QuestionAnswerOutlined,
  // RecordVoiceOverOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import BoxShadow from "components/ShadowBox";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import loadable from "@loadable/component";

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

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  sideBarContent: {},
  controller: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
  },
  drawerPaper: {
    minWidth: "350px",
    maxWidth: "350px",
    padding: theme.spacing(2),
    height: "84%",
    top: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: `0px 0px 30px 1px  ${
      theme.palette.type === "dark" ? "#0e0c0c" : "#c2c2c2"
    }`,
  },
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
}));

const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

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
                return <Participants />;
              case 2:
                return <Chat />;
              case 3:
                return <Polls />;
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
            <Badge badgeContent={4} color="primary">
              <PeopleOutlineOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Chats">
          <IconButton
            onClick={handleIconPress(2)}
            className={clsx(open && index === 2 && classes.selected)}
          >
            <Badge color="primary" variant="dot">
              <ChatOutlined />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* <Tooltip title="Record Call">
          <IconButton
            onClick={handleIconPress(2)}
            className={clsx(open && index === 3 && classes.selected)}
          >
            <Badge variant="dot">
              <RecordVoiceOverOutlined />
            </Badge>
          </IconButton>
        </Tooltip> */}
        <Tooltip title="Polls">
          <IconButton
            onClick={handleIconPress(3)}
            className={clsx(open && index === 3 && classes.selected)}
          >
            <Badge color="primary" variant="dot">
              <AssessmentOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        {/* <Tooltip title="Q&A">
          <IconButton
            onClick={handleIconPress(2)}
            className={clsx(open && index === 4 && classes.selected)}
          >
            <Badge color="primary" variant="dot">
              <QuestionAnswerOutlined />
            </Badge>
          </IconButton>
        </Tooltip> */}
      </Box>
    </>
  );
};
export default React.memo(SideBar);
