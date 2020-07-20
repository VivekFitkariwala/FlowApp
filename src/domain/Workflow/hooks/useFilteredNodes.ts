import { useContext } from "react";
import { NodeContext } from "../../../hooks/node/context";
import { NODE_MODEL } from "../../../types/index";
import React from "react";

interface ReturnType {
  nodes: NODE_MODEL[];
  nodeDispatch: React.Dispatch<any>;
}

function useFilteredNodes(workflowId: string): ReturnType {
  const [{ nodeStates }, dispatch] = useContext(NodeContext);

  const nodes = nodeStates.filter((state: NODE_MODEL) => {
    return state.workflowId === workflowId;
  });

  return { nodes, nodeDispatch: dispatch };
}

export default useFilteredNodes;
