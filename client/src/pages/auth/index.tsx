import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Switch,
  useHistory,
  useLocation,
  Route,
  Redirect,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { updateAuth } from "core/reducers/auth";
import { signIn } from "utils/auth.fetch";
import { useSnackbar } from "notistack";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";
import NotFound from "components/NotFound";

const SignIn = loadable(() => import("./SignIn"), {
  fallback: <LinearProgress />,
});
const SignUp = loadable(() => import("./SignUp"), {
  fallback: <LinearProgress />,
});

const INITIAL_STATE = { text: "", error: "" };

const useStyles = makeStyles((theme) => ({}));

const Auth: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
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
