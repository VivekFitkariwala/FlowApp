import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles, useButtonStyle } from "./Header.style";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { WORKFLOW_STATUS, WORKFLOW_MODEL } from "../../../../types/index";

interface IProps {
  workflowState: WORKFLOW_MODEL;
  updateWorkFlow: (name: WORKFLOW_MODEL) => void;
  addTask: () => void;
  saveTasks: () => void;
  deleteTask: () => void;
  shuffleTasks: () => void;
}

function Header({
  workflowState,
  updateWorkFlow,
  addTask,
  saveTasks,
  deleteTask,
  shuffleTasks,
}: IProps) {
  const classes = useStyles();
  const buttonClasses = useButtonStyle();

  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <TextField
            className={classes.root}
            placeholder="Workflow Name"
            value={workflowState.name}
            margin="normal"
            variant="outlined"
            fullWidth={true}
            onChange={({ target: { value } }: { target: { value: string } }) =>
              updateWorkFlow({ ...workflowState, name: value })
            }
          />
        </Grid>
        <Grid item className={classes.createButton}>
          {workflowState.state === WORKFLOW_STATUS.COMPLETED ? (
            <Button
              variant="contained"
              color="primary"
              className={buttonClasses.root}
              onClick={shuffleTasks}
            >
              Shuffle
            </Button>
          ) : (
            <></>
          )}
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
            onClick={deleteTask}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
            onClick={addTask}
          >
            Add Node
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses.root}
            onClick={saveTasks}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
