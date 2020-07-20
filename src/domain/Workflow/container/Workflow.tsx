import React, { useState, useEffect } from "react";
import Header from "../layouts/Header/Header";
import Body from "../layouts/Body/Body";
import useStyles from "./Workflow.style";
import { useParams } from "react-router-dom";
import {
  WORKFLOW_MODEL,
  NODE_STATUS,
  WORKFLOW_STATUS,
} from "../../../types/index";
import { saveNodes } from "../../../hooks/node/action";
import useSingleWorkflow from "../hooks/useSingleWorkflow";
import useFilteredNodes from "../hooks/useFilteredNodes";
import { updateWorkflow } from "../../../hooks/workflow/action";
import { v4 as uuidv4 } from "uuid";
import shuffle from "lodash.shuffle";

function Workflow() {
  const classes = useStyles();
  const params = useParams();
  const workflowId = (params as any).id;

  const { workflow, workFlowDispatch } = useSingleWorkflow(workflowId);

  const { nodes, nodeDispatch } = useFilteredNodes(workflowId);

  const [localNodes, setLocalNodes] = useState(nodes);
  const [localWorkflow, setLocalWorkflow] = useState(workflow);

  useEffect(() => {
    setLocalWorkflow(workflow);
  }, [workflow]);

  const updateWorkFlow = (workflow: WORKFLOW_MODEL) => {
    setLocalWorkflow(workflow);
  };

  const addTask = () => {
    setLocalNodes([
      ...localNodes,
      {
        id: uuidv4(),
        workflowId,
        task: "",
        description: "",
        state: NODE_STATUS.PENDING,
      },
    ]);
  };

  const saveTasks = () => {
    const currentState = localNodes.reduce((accu, { state }) => {
      return accu && state === NODE_STATUS.COMPLETED;
    }, true);

    const newState =
      localWorkflow.state === WORKFLOW_STATUS.COMPLETED &&
      currentState === false
        ? WORKFLOW_STATUS.PENDING
        : localWorkflow.state;
    // update workflow related data
    updateWorkflow(workFlowDispatch, { ...localWorkflow, state: newState });

    // update node related data
    saveNodes(nodeDispatch, { nodes: localNodes, workflowId });
  };

  const deleteTask = () => {
    if (localNodes.length > 0) {
      const newLocalNodes = [...localNodes];
      newLocalNodes.pop();
      setLocalNodes(newLocalNodes);
    }
  };

  const shuffleTasks = () => {
    const newLocalNodes = shuffle(localNodes);
    setLocalNodes(newLocalNodes);
  };

  return (
    <div className={classes.root}>
      <Header
        workflowState={localWorkflow}
        updateWorkFlow={updateWorkFlow}
        addTask={addTask}
        saveTasks={saveTasks}
        deleteTask={deleteTask}
        shuffleTasks={shuffleTasks}
      />
      <Body nodes={localNodes} setNodes={setLocalNodes} />
    </div>
  );
}

export default Workflow;
