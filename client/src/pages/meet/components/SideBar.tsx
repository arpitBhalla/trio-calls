import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Chat from "./Chat";
import Participants from "./Participants";
import {
  InfoOutlined,
  CategoryOutlined,
  ChatOutlined,
  PeopleOutlineOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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
    top: 10,
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
    right: 10,
    minWidth: "400px",
    maxWidth: "400px",
    boxShadow: "0px 0px 30px 1px rgb(214, 214, 214)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    height: "84%",
    backgroundColor: "#fff",
  },
  controller: {
    position: "absolute",
    bottom: 20,
    left: "75%",
  },
}));

const SideBar: React.FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Box
        className={clsx(classes.sideBarContent, {
          [classes.sideBarOpen]: open,
          [classes.sideBarClose]: !open,
        })}
      >
        {[null, <Chat />, <Participants />][index]}
      </Box>
      <button onClick={() => setOpen(!open)}>Open</button>
      {JSON.stringify({ open })}
      <Box className={classes.controller}>
        <Tooltip title="Participants">
          <IconButton onClick={() => setIndex(1)}>
            <PeopleOutlineOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Chat">
          <IconButton onClick={() => setIndex(2)}>
            <ChatOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="White Board">
          <IconButton onClick={() => setIndex(3)}>
            <CategoryOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Meet Info">
          <IconButton aria-label="">
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
export default React.memo(SideBar);
