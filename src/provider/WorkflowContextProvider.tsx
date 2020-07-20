import React, { useReducer } from "react";
import { WorkflowContext } from "../hooks/workflow/context";
import WorkflowReducer from "../hooks/workflow/reducer";
import { initialWorkflowState } from "../hooks/workflow/store";

function WorkflowContextProvider(props: any) {
  const [state, dispatch] = useReducer(WorkflowReducer, initialWorkflowState);

  return (
    <WorkflowContext.Provider value={[state, dispatch]}>
      {props.children}
    </WorkflowContext.Provider>
  );
}

export default WorkflowContextProvider;
