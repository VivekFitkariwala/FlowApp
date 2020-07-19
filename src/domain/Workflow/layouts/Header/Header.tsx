import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyles, useButtonStyle } from "./Header.style";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Header() {
  const classes = useStyles();
  const buttonClasses = useButtonStyle();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="body1">
        Search workflow based on workflow names
      </Typography>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <TextField
            className={classes.root}
            placeholder="Workflow Name"
            value=""
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item className={classes.createButton}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
          >
            Shuffle
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
          >
            Add Node
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
