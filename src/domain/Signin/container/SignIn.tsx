import React, { useContext } from "react";
import SignInForm from "../component/SignInForm";
import useStyles from "./SignIn.style";
import { AppContext } from "../../../hooks/context";
import { APP_ACTION } from "../../../hooks/actions";
import { useLocation, useHistory } from "react-router-dom";

function SignIn() {
  const classes = useStyles();
  const [, dispatch] = useContext(AppContext);
  const { state } = useLocation();
  const history = useHistory();

  function signInDispatchAction(
    email: string,
    password: string,
    rememberMe: boolean
  ): void {
    dispatch({
      type: APP_ACTION.LOGIN,
      payload: {
        email,
        password,
        rememberMe,
      },
    });

    // redirect to state
    history.push((state && (state as any).from) || "/");
  }

  return (
    <div className={classes.root}>
      <SignInForm signIn={signInDispatchAction} />
    </div>
  );
}

export default SignIn;
