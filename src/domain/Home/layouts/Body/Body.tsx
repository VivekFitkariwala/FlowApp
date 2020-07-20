import React from "react";
import Workflow from "../../component/Workflow/Workflow";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Body.style";
import { WORKFLOW_MODEL } from "../../../../types/index";

interface IProps {
  workflowStates: WORKFLOW_MODEL[];
  deleteWorkflow: (id: string) => void;
  updateWorkflowState: (id: string) => void;
}

function Body({ workflowStates, deleteWorkflow, updateWorkflowState }: IProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {workflowStates.map((state, key) => {
        return (
          <Grid item xs={3} key={key}>
            <Workflow
              state={state}
              deleteFn={deleteWorkflow}
              updateState={updateWorkflowState}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Body;
