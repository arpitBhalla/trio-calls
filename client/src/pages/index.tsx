import * as React from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
  useLocation,
} from "react-router-dom";
import loadable from "@loadable/component";
import { useAppSelector } from "core/hooks/redux";

// const Home = loadable(() => import("./home/Home"));
// const Meet = loadable(() => import("./meet/Meet"));
// const Auth = loadable(() => import("./home/Home"));

const Routes: React.FC = () => {
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);
  const { pathname } = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!isAuth) {
      history.push("/auth?redirect_url=" + pathname);
    }
  }, [isAuth, pathname, history]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <>Home</>} />
        <Route path="/auth" exact component={() => <>Auth</>} />
        <Route path="/:meetID" component={() => <>Meet</>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
