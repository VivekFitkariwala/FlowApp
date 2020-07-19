import React from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./Workflow.style";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

function Workflow() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="Delete" className={classes.delete}>
        <DeleteIcon />
      </Fab>
      <Card raised={true}>
        <CardHeader title="Login" className={classes.title}></CardHeader>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1" display="inline">
                Completed
              </Typography>
            </Grid>
            <Grid item>
              <Fab color="primary" aria-label="Check">
                <CheckIcon />
              </Fab>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Workflow;
