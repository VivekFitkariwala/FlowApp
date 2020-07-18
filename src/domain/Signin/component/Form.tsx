import React, { useState } from "react";
import useStyles from "./Form.style";
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

function LoginForm() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
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
          value=""
          margin="normal"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            startAdornment: <InputAdornment position="start">E</InputAdornment>,
          }}
        />
        <TextField
          className={classes.root}
          placeholder="Password"
          value=""
          margin="normal"
          variant="outlined"
          fullWidth={true}
          InputProps={{
            startAdornment: <InputAdornment position="start">P</InputAdornment>,
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
        <Button variant="contained" color="primary" fullWidth={true}>
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

export default LoginForm;
