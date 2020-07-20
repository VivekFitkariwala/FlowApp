import React, { useContext, useState, useEffect } from "react";
import Header from "../layouts/Header/Header";
import Body from "../layouts/Body/Body";
import useStyles from "./Home.style";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  WORKFLOW_FILTER,
  NODE_MODEL,
  NODE_STATUS,
  WORKFLOW_MODEL,
  WORKFLOW_STATUS,
} from "../../../types/index";
import { WorkflowContext } from "../../../hooks/workflow/context";
import {
  addWorkflow,
  deleteWorkflow,
  updateWorkflow,
} from "../../../hooks/workflow/action";
import { NodeContext } from "../../../hooks/node/context";

function Home() {
  const classes = useStyles();
  const [{ workflowStates }, dispatch] = useContext(WorkflowContext);

  // get node States
  const [{ nodeStates }] = useContext(NodeContext);

  const [filter, setFilter] = useState({
    filter: WORKFLOW_FILTER.ALL,
    searchString: "",
  });

  const handleFilter = ({
    filter,
    searchString,
  }: {
    filter: WORKFLOW_FILTER;
    searchString: string;
  }) => {
    setFilter({
      filter,
      searchString,
    });
  };
  const history = useHistory();

  const [filteredWorkflow, setFilteredWorkflow] = useState(workflowStates);

  useEffect(() => {
    const filterToStatus =
      filter.filter === WORKFLOW_FILTER.COMPLETED
        ? WORKFLOW_STATUS.COMPLETED
        : WORKFLOW_STATUS.PENDING;
    const filteredWorkflowToServe = workflowStates.filter(
      (state: WORKFLOW_MODEL) => {
        return (
          filter.filter === WORKFLOW_FILTER.ALL ||
          filterToStatus === state.state
        );
      }
    );

    const stringSearch = filteredWorkflowToServe.filter(
      (state: WORKFLOW_MODEL) => {
        return state.name.includes(filter.searchString);
      }
    );

    setFilteredWorkflow(stringSearch);
  }, [filter, workflowStates]);

  const createNewWorkflow = () => {
    const uuid = uuidv4();
    addWorkflow(dispatch, uuid);

    // redirect to workflow
    history.push(`/workflow/${uuid}`);
  };

  const deleteExistingWorkflow = (id: string) => {
    deleteWorkflow(dispatch, id);
  };

  const updateWorkflowState = (workflowId: string) => {
    // check node states
    const filteredNode: NODE_MODEL[] = nodeStates.filter(
      (node: NODE_MODEL) => node.workflowId === workflowId
    );

    // update state
    const value = filteredNode.reduce((accu, node) => {
      return accu && node.state === NODE_STATUS.COMPLETED;
    }, true);

    if (value) {
      const workflow = workflowStates.find(
        (model: WORKFLOW_MODEL) => model.id === workflowId
      );
      const newState =
        workflow.state === WORKFLOW_STATUS.COMPLETED
          ? WORKFLOW_STATUS.PENDING
          : WORKFLOW_STATUS.COMPLETED;
      updateWorkflow(dispatch, { ...workflow, state: newState });
    }
  };

  return (
    <div className={classes.root}>
      <Header
        filter={filter}
        updateFilter={handleFilter}
        createNewWorkflow={createNewWorkflow}
      />
      <Body
        workflowStates={filteredWorkflow}
        deleteWorkflow={deleteExistingWorkflow}
        updateWorkflowState={updateWorkflowState}
      />
    </div>
  );
}

export default Home;
