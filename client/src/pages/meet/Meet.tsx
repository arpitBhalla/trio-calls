import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/Tabs";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <SideBar />
    </>
  );
};
export default App;
