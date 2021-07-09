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
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { useLocalStorage } from "core/hooks/common";
import { useSnackbar } from "notistack";
import { updateAuth } from "core/reducers/auth";
import LoadingPage from "components/LoadingPage";

const Home = loadable(() => import("./home/Home"), {
  fallback: <LinearProgress />,
});
const Meet = loadable(() => import("./meet/Meet"), {
  fallback: <LinearProgress />,
});
const Auth = loadable(() => import("./auth"), {
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
    }, 2000);
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
