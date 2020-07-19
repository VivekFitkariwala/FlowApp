import React from "react";
import Node from "../../component/Nodes/Node";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Body.style";

function Body() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={3}>
        <Node />
      </Grid>
    </Grid>
  );
}

export default Body;
