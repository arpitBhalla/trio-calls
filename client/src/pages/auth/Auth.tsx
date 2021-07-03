import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { updateAuth } from "core/actions/auth";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

const Auth: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { isAuth, displayName } = useAppSelector(
    ({ authReducer }) => authReducer
  );

  const redirect_url = new URLSearchParams(search).get("redirect_url") || "/";

  React.useEffect(() => {
    if (isAuth) {
      history.push(redirect_url);
    }
  }, [isAuth, redirect_url, history]);
  return (
    <>
      {new URLSearchParams(search).get("redirect_url")}
      {JSON.stringify({ isAuth, displayName })}
      <button
        onClick={() =>
          dispatch(updateAuth({ isAuth: true, displayName: "Arpit" }))
        }
      >
        saf
      </button>
      <Container maxWidth="xs">
        <Box boxShadow="0px 0px 30px 1px rgb(214, 214, 214)" p={4} py={5}>
          <FormControl fullWidth>
            <FormLabel></FormLabel>
            <TextField
              fullWidth
              label="Email"
              // value={}
              // onChange={}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default Auth;
