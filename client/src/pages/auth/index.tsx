import * as React from "react";
import {
  Switch,
  useHistory,
  useLocation,
  Route,
  Redirect,
} from "react-router-dom";
import { useAppSelector } from "core/hooks/redux";
import loadable from "@loadable/component";
import NotFound from "@arpitbhalla/trio-calls/components/NotFound";
import LoadingPage from "@arpitbhalla/trio-calls/components/LoadingPage";

const SignIn = loadable(() => import("./SignIn"), {
  fallback: <LoadingPage />,
});
const SignUp = loadable(() => import("./SignUp"), {
  fallback: <LoadingPage />,
});

const Auth: React.FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);

  const redirect_url = new URLSearchParams(search).get("redirect_url") || "/";

  React.useEffect(() => {
    if (isAuth) {
      history.push(redirect_url);
    }
  }, [isAuth, redirect_url, history]);

  return (
    <Switch>
      <Route path="/auth/signIn" exact component={SignIn} />
      <Route path="/auth/signUp" exact component={SignUp} />
      <Route path="/auth" exact>
        <Redirect to="auth/signIn" />
      </Route>
      <Route path="/auth" component={NotFound} />
    </Switch>
  );
};

export default Auth;
