import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { updateAuth } from "core/reducers/auth";
import { signUp } from "@arpitbhalla/trio-calls/utils/auth.fetch";
import { useSnackbar } from "notistack";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import VerifiedUserOutlined from "@material-ui/icons/PersonOutlineOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PasswordIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logo from "@arpitbhalla/trio-calls/components/Logo";
import ShadowBox from "@arpitbhalla/trio-calls/components/ShadowBox";
import { useLocalStorage } from "core/hooks/common";

const INITIAL_STATE = { text: "", error: "" };

const useStyles = makeStyles((theme) => ({
  formField: {
    paddingBottom: theme.spacing(1),
  },
}));
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const setUID = useLocalStorage("UID", "")[1];
  const { search } = useLocation();
  const { isAuth } = useAppSelector(({ authReducer }) => authReducer);
  const redirect_url = new URLSearchParams(search).get("redirect_url") || "/";
  const [name, setName] = React.useState(INITIAL_STATE);
  const [email, setEmail] = React.useState(INITIAL_STATE);
  const [password, setPassword] = React.useState(INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async () => {
    const inValid = (
      [
        [name.text, setName, /(\w+)/],
        [email.text, setEmail, emailRegex],
        [password.text, setPassword, /(\w+)/],
      ] as [string, typeof setName, RegExp][]
    ).filter((elem) => !elem[0] || !elem[2].test(elem[0]));

    if (inValid.length) {
      inValid.map(([text, setState]) =>
        setState({ text, error: "Field is invalid" })
      );
      return;
    }

    setLoading(true);

    await signUp(name.text, email.text, password.text)
      .then((userDetails) => {
        dispatch(updateAuth({ isAuth: true, ...userDetails }));
        enqueueSnackbar("Welcome " + userDetails.displayName);
        setUID(JSON.stringify(userDetails));
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error || "Something went wrong", {
          variant: "error",
        });
      });
  };
  const redirectToSignIn = () => {
    history.push("/auth/signIn?redirect_url=" + redirect_url);
  };
  React.useEffect(() => {
    if (isAuth) {
      history.push(redirect_url);
    }
  }, [isAuth, redirect_url, history]);

  return (
    <Container maxWidth="xs">
      <ShadowBox p={4} py={3} mt={8}>
        <Typography align="center">
          <Logo size={12} />
        </Typography>
        <Typography variant="body1" align="center" color="primary">
          Create your team account
        </Typography>
        <Box py={2}>
          <FormControl
            error={!!name.error}
            fullWidth
            className={classes.formField}
          >
            <TextField
              fullWidth
              placeholder="Display Name"
              variant="outlined"
              error={!!name.error}
              value={name.text}
              onChange={(e) => {
                setName({ error: "", text: e.target.value });
              }}
              autoFocus
              type="name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VerifiedUserOutlined
                      color={!name.error ? "action" : "error"}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText>{name.error}</FormHelperText>
          </FormControl>
          <FormControl
            error={!!email.error}
            fullWidth
            className={classes.formField}
          >
            <TextField
              fullWidth
              placeholder="Email"
              variant="outlined"
              error={!!email.error}
              value={email.text}
              onChange={(e) => {
                setEmail({ error: "", text: e.target.value });
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
          <FormControl
            error={!!password.error}
            fullWidth
            className={classes.formField}
          >
            <TextField
              placeholder="Password"
              variant="outlined"
              type="password"
              error={Boolean(password.error)}
              onChange={(e) => {
                setPassword({ error: "", text: e.target.value });
              }}
              value={password.text}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSignUp();
              }}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon
                      color={!password.error ? "action" : "error"}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText>{password.error}</FormHelperText>
          </FormControl>
        </Box>
        <Button
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          disabled={loading}
          onClick={handleSignUp}
        >
          Register Now
        </Button>
        <Button
          variant="text"
          color="primary"
          fullWidth
          onClick={redirectToSignIn}
        >
          Already have an account? Sign in
        </Button>
      </ShadowBox>
    </Container>
  );
};

export default SignUp;
