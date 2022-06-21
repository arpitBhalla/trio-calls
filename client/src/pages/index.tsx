import React from "react";
import {
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import loadable from "@loadable/component";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useLocalStorage } from "core/hooks/common";
import { useSnackbar } from "notistack";
import { updateAuth } from "core/reducers/auth";
import { useConnection } from "core/hooks/useConnection";
import LoadingPage from "@arpitbhalla/trio-calls/components/LoadingPage";

const Home = loadable(() => import("./home/Home"), {
  fallback: <LoadingPage />,
});
const Meet = loadable(() => import("./meet"), {
  fallback: <LoadingPage />,
});
const Auth = loadable(() => import("./auth"), {
  fallback: <LoadingPage />,
});
const Chat = loadable(() => import("./chat"), {
  fallback: <LoadingPage />,
});

const AuthRoute: React.FC<RouteProps> = (props) => {
  useConnection();
  const history = useHistory();
  const { pathname } = useLocation();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);

  React.useEffect(() => {
    if (!isAuth) {
      history.push("/auth/signIn?redirect_url=" + pathname);
    }
  }, [isAuth, pathname, history]);

  return <Route {...props} />;
};

const Routes: React.FC = () => {
  const [UID] = useLocalStorage("UID", "");
  const [loading, setLoading] = React.useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (UID) {
      const userDetails = JSON.parse(UID);
      dispatch(updateAuth({ isAuth: true, ...userDetails }));
      enqueueSnackbar("Welcome " + userDetails.displayName);
    }
    const time = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => {
      clearTimeout(time);
    };
  }, [UID]);
  if (loading) return <LoadingPage />;
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
