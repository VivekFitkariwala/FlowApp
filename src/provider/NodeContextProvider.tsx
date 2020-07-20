import React, { useReducer } from "react";
import NodeReducer from "../hooks/node/reducer";
import { initialNodeState } from "../hooks/node/store";
import { NodeContext } from "../hooks/node/context";

function NodeContextProvider(props: any) {
  const [state, dispatch] = useReducer(NodeReducer, initialNodeState);

  return (
    <NodeContext.Provider value={[state, dispatch]}>
      {props.children}
    </NodeContext.Provider>
  );
}

export default NodeContextProvider;
