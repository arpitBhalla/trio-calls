import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";

type Props = {};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Chat: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Header />
    </>
  );
};
export default Chat;
