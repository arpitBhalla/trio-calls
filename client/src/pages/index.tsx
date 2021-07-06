import React from "react";
import {
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAppSelector } from "core/hooks/redux";

const Home = loadable(() => import("./home/Home"), {
  fallback: <LinearProgress />,
});
const Meet = loadable(() => import("./meet/Meet"), {
  fallback: <LinearProgress />,
});
const Auth = loadable(() => import("./auth/Auth"), {
  fallback: <LinearProgress />,
});
const Chat = loadable(() => import("./chat/Chat"), {
  fallback: <LinearProgress />,
});

const AuthRoute: React.FC<RouteProps> = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);

  React.useEffect(() => {
    if (!isAuth) {
      history.push("/auth?redirect_url=" + pathname);
    }
  }, [isAuth, pathname, history]);

  return <Route {...props} />;
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <AuthRoute path="/" exact component={Home} />
      <Route path="/auth" component={Auth} />
      <AuthRoute path="/chat" component={Chat} />
      <AuthRoute path="/:meetID" component={Meet} />
    </Switch>
  );
};

export default Routes;
