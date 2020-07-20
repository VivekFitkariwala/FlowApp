import React, { useContext } from "react";
import SignInForm from "../component/SignInForm";
import useStyles from "./SignIn.style";
import { useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../../hooks/auth/context";
import { dispatchSignIn } from "../../../hooks/auth/action";

function SignIn() {
  const classes = useStyles();
  const [, dispatch] = useContext(AuthContext);
  const { state } = useLocation();
  const history = useHistory();

  function signInDispatchAction(
    email: string,
    password: string,
    rememberMe: boolean
  ): void {
    dispatchSignIn(dispatch, email, password, rememberMe);
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
