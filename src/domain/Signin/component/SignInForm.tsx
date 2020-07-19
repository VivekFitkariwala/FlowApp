import React, { useState } from "react";
import useStyles from "./SignInForm.style";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

type IProps = {
  signIn: (email: string, password: string, setChecked: boolean) => void;
};

function SignInForm({ signIn }: IProps) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const handleEmail = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setEmail(value);
  };
  const handlePassword = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setPassword(value);
  };
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <Card raised={true} className={classes.container}>
      <CardHeader title="Login" className={classes.title}></CardHeader>
      <CardContent>
        <TextField
          className={classes.root}
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          margin="normal"
          type="email"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.root}
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          margin="normal"
          type="password"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        <Typography variant="body1" display="inline">
          Remember me
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={() => signIn(email, password, checked)}
        >
          Login
        </Button>
      </CardActions>
      <div className={classes.footer}>
        <Link to="#">
          <Typography variant="subtitle1" display="inline">
            Don't have an account? Sign up here
          </Typography>
        </Link>
      </div>
    </Card>
  );
}

export default SignInForm;
