import * as React from "react";
import {
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import loadable from "@loadable/component";
import { useAppSelector } from "core/hooks/redux";

const Home = loadable(() => import("./home/Home"));
const Meet = loadable(() => import("./meet/WaitRoom"));
const Auth = loadable(() => import("./auth/Auth"));

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
      <Route path="/chat" component={() => <>safd</>} />
      <AuthRoute path="/:meetID" component={Meet} />
    </Switch>
  );
};

export default Routes;
