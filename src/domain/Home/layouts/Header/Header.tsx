import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Header.style";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { WORKFLOW_STATE_FILTER } from "../../../../types/index";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function Header() {
  const classes = useStyles();

  const handleChange = () => {};

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="body1">
        Search workflow based on workflow names
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <TextField
            className={classes.root}
            placeholder="Search"
            value=""
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined">
            <Select
              value={WORKFLOW_STATE_FILTER.ALL}
              onChange={handleChange}
              displayEmpty
              className={classes.filter}
            >
              <MenuItem value={WORKFLOW_STATE_FILTER.ALL}>
                {WORKFLOW_STATE_FILTER.ALL}
              </MenuItem>
              <MenuItem value={WORKFLOW_STATE_FILTER.COMPLETED}>
                {WORKFLOW_STATE_FILTER.COMPLETED}
              </MenuItem>
              <MenuItem value={WORKFLOW_STATE_FILTER.PENDING}>
                {WORKFLOW_STATE_FILTER.PENDING}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} className={classes.createButton}>
          <Button variant="contained" color="primary" fullWidth={true}>
            Create Workflow
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
