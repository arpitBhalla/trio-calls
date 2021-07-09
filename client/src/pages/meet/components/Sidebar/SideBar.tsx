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
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

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
    boxShadow: "0px 0px 30px 1px rgb(214, 214, 214)",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    height: "84%",
    backgroundColor: "#fff",
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
      <Box
        className={clsx(classes.sideBarContent, {
          [classes.sideBarOpen]: !open,
          [classes.sideBarClose]: open,
        })}
      >
        <Typography variant="h6">
          {["Meeting Details", "In-call messages", "People"][index]}
        </Typography>
        {
          [<MeetInfo key={2} />, <Chat key={0} />, <Participants key={1} />][
            index
          ]
        }
      </Box>
      <Box className={classes.controller}>
        {(
          [
            ["Meet Info", InfoOutlined],
            ["Chat", ChatOutlined],
            ["Participants", PeopleOutlineOutlined],
          ] as [string, typeof PeopleOutlineOutlined][]
        ).map(([name, Icon], key) => (
          <Tooltip title={name} key={key}>
            <IconButton
              onClick={handleIconPress(key)}
              style={open && key === index ? { backgroundColor: "red" } : {}}
            >
              <Icon />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </>
  );
};
export default React.memo(SideBar);
