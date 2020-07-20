import React from "react";
import { NODE_MODEL } from "../../types/index";

export enum NODE_ACTION {
  SAVE = "[Workflow] save",
}

interface SAVE {
  type: NODE_ACTION;
  payload: {
    nodes: NODE_MODEL[];
    workflowId: string;
  };
}

export function saveNodes(
  dispatch: React.Dispatch<NODE_ACTIONS>,
  { nodes, workflowId }: { nodes: NODE_MODEL[]; workflowId: string }
) {
  dispatch({
    type: NODE_ACTION.SAVE,
    payload: { nodes, workflowId },
  });
}

export type NODE_ACTIONS = SAVE;
