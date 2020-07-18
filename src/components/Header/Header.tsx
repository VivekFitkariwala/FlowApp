import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          FLOWAPP
        </Typography>
        <Typography variant="body2">LOGOUT</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
