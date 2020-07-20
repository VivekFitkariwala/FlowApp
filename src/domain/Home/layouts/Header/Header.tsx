import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "./Header.style";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { WORKFLOW_FILTER } from "../../../../types/index";

type IProps = {
  filter: { filter: WORKFLOW_FILTER; searchString: string };
  updateFilter: ({
    filter,
    searchString,
  }: {
    filter: WORKFLOW_FILTER;
    searchString: string;
  }) => void;
  createNewWorkflow: () => void;
};

function Header({ filter, updateFilter, createNewWorkflow }: IProps) {
  const classes = useStyles();

  const handleChange = ({ target: { value } }: { target: { value: any } }) => {
    updateFilter({ filter: value, searchString: filter.searchString });
  };

  const handleTextChange = ({
    target: { value },
  }: {
    target: { value: any };
  }) => {
    updateFilter({ filter: filter.filter, searchString: value });
  };

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
            value={filter.searchString}
            margin="normal"
            variant="outlined"
            fullWidth={true}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined">
            <Select
              defaultValue={WORKFLOW_FILTER.ALL}
              onChange={handleChange}
              displayEmpty
              className={classes.filter}
            >
              <MenuItem value={WORKFLOW_FILTER.ALL}>
                {WORKFLOW_FILTER.ALL}
              </MenuItem>
              <MenuItem value={WORKFLOW_FILTER.COMPLETED}>
                {WORKFLOW_FILTER.COMPLETED}
              </MenuItem>
              <MenuItem value={WORKFLOW_FILTER.PENDING}>
                {WORKFLOW_FILTER.PENDING}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} className={classes.createButton}>
          <Button
            onClick={createNewWorkflow}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            Create Workflow
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
