import React from "react";
import Form from "../component/Form";
import useStyles from "./SignIn.style";

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form />
    </div>
  );
}

export default SignIn;
