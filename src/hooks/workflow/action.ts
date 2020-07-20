import React from "react";
import { WORKFLOW_MODEL } from "../../types/index";

export enum WORKFLOW_ACTION {
  ADD = "[Workflow] add",
  UPDATE = "[Workflow] update",
  DELETE = "[Workflow] delete",
}

interface ADD {
  type: WORKFLOW_ACTION;
  payload: string;
}

interface UPDATE {
  type: WORKFLOW_ACTION;
  payload: Partial<WORKFLOW_MODEL>;
}

interface DELETE {
  type: WORKFLOW_ACTION;
  payload: string;
}

export function addWorkflow(
  dispatch: React.Dispatch<WORKFLOW_ACTIONS>,
  id: string
) {
  dispatch({
    type: WORKFLOW_ACTION.ADD,
    payload: id,
  });
}

export function updateWorkflow(
  dispatch: React.Dispatch<WORKFLOW_ACTIONS>,
  workflowModel: Partial<WORKFLOW_MODEL>
) {
  dispatch({
    type: WORKFLOW_ACTION.UPDATE,
    payload: workflowModel,
  });
}

export function deleteWorkflow(
  dispatch: React.Dispatch<WORKFLOW_ACTIONS>,
  id: string
) {
  dispatch({
    type: WORKFLOW_ACTION.DELETE,
    payload: id,
  });
}

export type WORKFLOW_ACTIONS = ADD | UPDATE | DELETE;
