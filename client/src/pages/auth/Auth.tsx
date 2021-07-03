import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import { updateAuth } from "core/actions/auth";

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
    </>
  );
};

export default Auth;
