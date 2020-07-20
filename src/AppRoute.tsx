import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./domain/Signin/container/SignIn";
import Home from "./domain/Home/container/Home";
import Workflow from "./domain/Workflow/container/Workflow";
import { AuthContext } from "./hooks/auth/context";

function AppRoute() {
  const [{ auth }] = useContext(AuthContext);
  return (
    <>
      {auth ? (
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
      ) : (
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
      )}
    </>
  );
}

export default AppRoute;
