import React from "react";
import AppRoute from "./AppRoute";
import Header from "./components/Header/Header";
import useStyles from "./App.style";
import CssBaseline from "@material-ui/core/CssBaseline";
import AuthContextProvider from "./provider/AuthContextProvider";
import WorkflowContextProvider from "./provider/WorkflowContextProvider";
import NodeContextProvider from "./provider/NodeContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AuthContextProvider>
        <WorkflowContextProvider>
          <NodeContextProvider>
            <div className={classes.root}>
              <Router>
                <Header />
                <div className={classes.main}>
                  <AppRoute />
                </div>
              </Router>
            </div>
          </NodeContextProvider>
        </WorkflowContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
