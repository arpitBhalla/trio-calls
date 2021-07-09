import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Chat from "components/Chat/ChatLayout";
import Participants from "./Participants";
import MeetInfo from "./Info";
import {
  InfoOutlined,
  ChatOutlined,
  PeopleOutlineOutlined,
  Close,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import BoxShadow from "components/ShadowBox";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  sideBarClose: {
    transition: theme.transitions.create("top", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top: theme.spacing(2),
  },
  sideBarOpen: {
    top: "-100vh",
    transition: theme.transitions.create("top", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sideBarContent: {
    position: "absolute",
    right: theme.spacing(2),
    minWidth: "350px",
    maxWidth: "350px",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    height: "84%",
  },
  controller: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(2),
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
      <BoxShadow
        component={Paper}
        className={clsx(classes.sideBarContent, {
          [classes.sideBarOpen]: !open,
          [classes.sideBarClose]: open,
        })}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {["Meeting Details", "People", "In-call messages"][index]}
          </Typography>
          <IconButton aria-label="" onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        {(() => {
          switch (index) {
            case 0:
              return <MeetInfo />;
            case 1:
              return <Participants />;
            case 2:
              return <Chat />;
            default:
              return null;
          }
        })()}
      </BoxShadow>
      <Box className={classes.controller}>
        <Tooltip title="Meet Info">
          <IconButton
            onClick={handleIconPress(0)}
            // style={open && key === index ? { backgroundColor: "red" } : {}}
          >
            <InfoOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Participants">
          <IconButton
            onClick={handleIconPress(1)}
            // style={open && key === index ? { backgroundColor: "red" } : {}}
          >
            <Badge badgeContent={4} color="primary">
              <PeopleOutlineOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Chats">
          <IconButton
            onClick={handleIconPress(2)}
            // style={open && key === index ? { backgroundColor: "red" } : {}}
          >
            <Badge color="primary" variant="dot">
              <ChatOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
export default React.memo(SideBar);
