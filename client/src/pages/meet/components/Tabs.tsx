import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Chat from "./Chat";
import Controller from "./Controller";
import Sketch from "./Sketch";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Tabs centered value={0} variant="fullWidth" aria-label="">
        <Tab label="Chat" />
        <Tab label="Participants" />
      </Tabs>
      <Chat />
      <Controller />
      <Sketch />
      {/* {1 ? <Chat /> : null} */}
    </>
  );
};
export default App;
