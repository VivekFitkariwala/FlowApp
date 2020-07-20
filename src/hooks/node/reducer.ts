import { NODE_STATE, NODE_MODEL } from "../../types/index";
import { NODE_ACTION, NODE_ACTIONS } from "./action";

const NodeReducer = (state: NODE_STATE, action: NODE_ACTIONS): NODE_STATE => {
  switch (action.type) {
    case NODE_ACTION.SAVE: {
      const { nodes, workflowId } = action.payload as {
        nodes: NODE_MODEL[];
        workflowId: string;
      };
      const newNodes = [
        ...state.nodeStates.filter((node) => node.workflowId !== workflowId),
        ...nodes,
      ];
      return {
        nodeStates: newNodes,
      };
    }

    default:
      return state;
  }
};

export default NodeReducer;
