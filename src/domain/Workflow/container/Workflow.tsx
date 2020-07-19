import React from "react";
import Header from "../layouts/Header/Header";
import Body from "../layouts/Body/Body";
import useStyles from "./Workflow.style";

function Workflow() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Body />
    </div>
  );
}

export default Workflow;
