import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Header.style";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../hooks/auth/context";
import { dispatchLogout } from "../../hooks/auth/action";
import { Link } from "react-router-dom";

function Header() {
  const classes = useStyles();
  const [{ auth }, dispatch] = useContext(AuthContext);

  const logoutClicked = () => {
    dispatchLogout(dispatch);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            FLOWAPP
          </Link>
        </Typography>
        {auth ? (
          <Button variant="contained" onClick={logoutClicked}>
            LOGOUT
          </Button>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
