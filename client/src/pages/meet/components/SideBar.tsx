import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Chat from "./Chat";
import Participants from "./Participants";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tabs
        centered
        value={index}
        onChange={(e, i) => setIndex(i)}
        variant="fullWidth"
        aria-label=""
      >
        <Tab label="Chat" />
        <Tab label="Participants" />
      </Tabs>
      {!index ? <Chat /> : <Participants />}
    </>
  );
};
export default App;
