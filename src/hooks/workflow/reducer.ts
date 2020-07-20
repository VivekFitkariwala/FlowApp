import { WORKFLOW_STATE, WORKFLOW_STATUS } from "../../types/index";
import { WORKFLOW_ACTIONS, WORKFLOW_ACTION } from "./action";
import { WORKFLOW_MODEL } from "../../types/index";

const WorkflowReducer = (
  state: WORKFLOW_STATE,
  action: WORKFLOW_ACTIONS
): WORKFLOW_STATE => {
  switch (action.type) {
    case WORKFLOW_ACTION.ADD: {
      const id = action.payload as string;
      const newWorkflow: WORKFLOW_MODEL = {
        id,
        name: "",
        state: WORKFLOW_STATUS.PENDING,
      };
      return {
        workflowStates: [...state.workflowStates, newWorkflow],
      };
    }

    case WORKFLOW_ACTION.UPDATE: {
      const { id, ...rest } = action.payload as WORKFLOW_MODEL;
      const newWorkflowState = [...state.workflowStates];
      let index = newWorkflowState.findIndex((state) => state.id === id)!;
      newWorkflowState[index] = { ...newWorkflowState[index], ...rest };
      return {
        workflowStates: newWorkflowState,
      };
    }

    case WORKFLOW_ACTION.DELETE: {
      const id = action.payload as string;
      const index = state.workflowStates.findIndex((state) => state.id === id);
      const newWorkflow = [...state.workflowStates];
      newWorkflow.splice(index, 1);
      return {
        workflowStates: [...newWorkflow],
      };
    }

    default:
      return state;
  }
};

export default WorkflowReducer;
