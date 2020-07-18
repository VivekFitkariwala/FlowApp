import React from "react";
import AppRoute from "./AppRoute";
import Header from "./components/Header/Header";
import useStyles from "./App.style";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <div className={classes.main}>
          <AppRoute />
        </div>
      </div>
    </>
  );
}

export default App;
