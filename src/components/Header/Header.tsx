import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Header.style";
import Button from "@material-ui/core/Button";
import { AppContext } from "../../hooks/context";
import { APP_ACTION } from "../../hooks/actions";

function Header() {
  const classes = useStyles();
  const [{ auth }, dispatch] = useContext(AppContext);
  const logoutClicked = () => {
    dispatch({
      type: APP_ACTION.LOGOUT,
    });
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          FLOWAPP
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
