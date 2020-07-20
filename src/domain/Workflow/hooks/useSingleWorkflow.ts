import { useContext } from "react";
import { WorkflowContext } from "../../../hooks/workflow/context";
import { WORKFLOW_MODEL } from "../../../types";

function useSingleWorkflow(workflowId: string) {
  const [{ workflowStates }, dispatch] = useContext(WorkflowContext);

  const workflow = workflowStates.find((state: WORKFLOW_MODEL) => {
    return state.id === workflowId;
  });

  return { workflow, workFlowDispatch: dispatch };
}

export default useSingleWorkflow;
