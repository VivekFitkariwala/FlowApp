import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./domain/Signin/container/SignIn";
import Home from "./domain/Home/container/Home";
import Workflow from "./domain/Workflow/container/Workflow";
import { AppContext } from "./hooks/context";

function AppRoute() {
  const [{ auth }] = useContext(AppContext);
  console.log("Inside routes");
  return (
    <>
      {auth ? (
        <Router>
          <Switch>
            <Route path="/workflow/:id">
              <Workflow />
            </Route>
            <Route path="/workflow">
              <Home />
            </Route>
            <Route
              path="/"
              render={() => {
                return (
                  <Redirect
                    to={{
                      pathname: "/workflow",
                    }}
                  />
                );
              }}
            ></Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route
              path="/"
              render={({ location }) => {
                return (
                  <Redirect
                    to={{
                      pathname: "/signIn",
                      state: { from: location },
                    }}
                  />
                );
              }}
            ></Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default AppRoute;
