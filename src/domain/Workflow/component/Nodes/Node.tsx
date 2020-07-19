import React from "react";
import {
  Fab,
  Grid,
  CardContent,
  Card,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import useStyles from "./Nodes.style";

function Node() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="Check" className={classes.check}>
        <CheckIcon />
      </Fab>
      <Card raised={true}>
        <CardContent>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <TextField
                className={classes.root}
                placeholder="Task"
                value=""
                margin="normal"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <TextField
                aria-label="maximum height"
                placeholder="Description"
                multiline
                rows={8}
                margin="normal"
                variant="outlined"
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Node;
