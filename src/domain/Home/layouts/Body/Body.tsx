import React from "react";
import Workflow from "../../component/Workflow/Workflow";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Body.style";

function Body() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={3}>
        <Workflow />
      </Grid>
    </Grid>
  );
}

export default Body;
