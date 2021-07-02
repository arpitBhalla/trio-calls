import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const App: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return <>mui</>;
};
export default App;
