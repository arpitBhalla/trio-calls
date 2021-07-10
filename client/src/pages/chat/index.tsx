import * as React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";

const Chat = loadable(() => import("./Chat"), {
  fallback: <LinearProgress />,
});

const ChatPage: React.FC = () => {
  return (
    <Switch>
      <Route path="/chat" exact component={Chat} />
      <Route path="/chat/:meetID" component={Chat} />
    </Switch>
  );
};

export default ChatPage;
