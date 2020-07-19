import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./domain/Signin/container/SignIn";
import Home from "./domain/Home/container/Home";

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/workflow/:id">Workflow</Route>
        <Route path="/signIn">
          <SignIn />
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
  );
}

export default AppRoute;
