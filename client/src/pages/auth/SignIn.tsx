import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { updateAuth } from "core/reducers/auth";
import { signIn } from "@arpitbhalla/trio-calls/utils/auth.fetch";
import { useSnackbar } from "notistack";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PasswordIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logo from "@arpitbhalla/trio-calls/components/Logo";
import ShadowBox from "@arpitbhalla/trio-calls/components/ShadowBox";
import { emailRegex } from "./SignUp";
import { useLocalStorage } from "core/hooks/common";

const INITIAL_STATE = { text: "", error: "" };

const SignIn: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { search } = useLocation();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);

  const redirect_url = new URLSearchParams(search).get("redirect_url") || "/";

  const [email, setEmail] = React.useState(INITIAL_STATE);
  const [password, setPassword] = React.useState(INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);
  const [firstStepOver, setEmailExist] = React.useState(false);
  const setUID = useLocalStorage("UID", "")[1];

  const handleLogin = async () => {
    if (!emailRegex.test(email.text)) {
      return setEmail({ ...email, error: "Field is invalid" });
    } else if (!firstStepOver) {
      return setEmailExist(true);
    } else if (!password.text) {
      return setPassword({ ...password, error: "Field is invalid" });
    }

    setLoading(true);

    await signIn(email.text, password.text)
      .then((userDetails) => {
        dispatch(updateAuth({ isAuth: true, ...userDetails }));
        enqueueSnackbar("Welcome " + userDetails.displayName);
        setUID(JSON.stringify(userDetails));
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error || "SomeThing went wrong", {
          variant: "error",
        });
      });
  };
  const redirectToSignUp = () => {
    history.push("/auth/signUp?redirect_url=" + redirect_url);
  };
  React.useEffect(() => {
    if (isAuth) {
      history.push(redirect_url);
    }
  }, [isAuth, redirect_url, history]);

  return (
    <Container maxWidth="xs">
      <ShadowBox p={4} py={5} mt={10}>
        <Typography align="center">
          <Box p={1}>
            <Logo size={8} />
          </Box>
        </Typography>
        <Typography variant="h5" align="center" color="primary">
          Sign in
        </Typography>
        <Typography variant="body1" align="center" color="primary">
          Use your Trio Calls account
        </Typography>
        <Box py={2}>
          <Collapse in={!firstStepOver} timeout={200}>
            <FormControl error={!!email.error} fullWidth>
              <TextField
                fullWidth
                error={!!email.error}
                margin="normal"
                placeholder="Email"
                variant="outlined"
                value={email.text}
                onChange={(e) => {
                  setEmail({ error: "", text: e.target.value });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setEmailExist(true);
                }}
                autoFocus
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color={!email.error ? "action" : "error"} />
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>{email.error}</FormHelperText>
            </FormControl>
          </Collapse>

          <Collapse in={firstStepOver} timeout={200}>
            <>
              <FormControl error={!!password.error} fullWidth>
                <TextField
                  margin="normal"
                  placeholder="Password"
                  variant="outlined"
                  type="password"
                  error={Boolean(password.error)}
                  onChange={(e) => {
                    setPassword({ error: "", text: e.target.value });
                  }}
                  value={password.text}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleLogin();
                  }}
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon
                          color={!password.error ? "primary" : "error"}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText>{password.error}</FormHelperText>
              </FormControl>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="text"
                  color="primary"
                  size="small"
                  disabled={loading}
                  style={{ textTransform: "capitalize" }}
                  onClick={() => setEmailExist(false)}
                >
                  Go Back
                </Button>
              </Box>
            </>
          </Collapse>
        </Box>
        <Button
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          disabled={loading}
          onClick={handleLogin}
        >
          {firstStepOver ? "Login" : "Next"}
        </Button>
        <Button
          variant="text"
          color="primary"
          fullWidth
          onClick={redirectToSignUp}
        >
          Create new account
        </Button>
      </ShadowBox>
    </Container>
  );
};

export default SignIn;
