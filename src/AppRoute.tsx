import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/workflow/:id">Workflow</Route>
        <Route path="/signIn">Sign In</Route>
        <Route path="/workflow">Workflow List</Route>
        <Route path="/">Workflow List</Route>
      </Switch>
    </Router>
  );
}

export default AppRoute;
