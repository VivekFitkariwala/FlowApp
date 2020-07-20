import React from "react";
import Node from "../../component/Nodes/Node";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Body.style";
import { NODE_MODEL } from "../../../../types/index";

interface IProps {
  nodes: NODE_MODEL[];
  setNodes: (nodes: NODE_MODEL[]) => void;
}

function Body({ nodes, setNodes }: IProps) {
  const classes = useStyles();

  const updateIndividualNode = (nodeUpdated: NODE_MODEL) => {
    const index = nodes.findIndex((node) => {
      return nodeUpdated.id === node.id;
    });
    const newNodes = [...nodes];
    newNodes[index] = { ...nodeUpdated };
    setNodes(newNodes);
  };

  return (
    <Grid container className={classes.container}>
      {nodes.map((node, key) => {
        return (
          <Grid item xs={3} key={key}>
            <Node node={node} update={updateIndividualNode} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Body;
