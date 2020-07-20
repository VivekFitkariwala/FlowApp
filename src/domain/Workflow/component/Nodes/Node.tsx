import React from "react";
import { Fab, Grid, CardContent, Card, TextField } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import useStyles from "./Nodes.style";
import { NODE_MODEL, NODE_STATUS } from "../../../../types/index";

interface IProps {
  node: NODE_MODEL;
  update: (node: NODE_MODEL) => void;
}

function Node({ node, update }: IProps) {
  const classes = useStyles();
  const colorToApply =
    node.state === NODE_STATUS.COMPLETED
      ? "primary"
      : node.state === NODE_STATUS.IN_PROGRESS
      ? "secondary"
      : "default";

  return (
    <div className={classes.root}>
      <Fab
        color={colorToApply}
        aria-label="Check"
        className={classes.check}
        onClick={() => {
          const toState =
            node.state === NODE_STATUS.PENDING
              ? NODE_STATUS.IN_PROGRESS
              : node.state === NODE_STATUS.IN_PROGRESS
              ? NODE_STATUS.COMPLETED
              : NODE_STATUS.PENDING;
          update({ ...node, state: toState });
        }}
      >
        <CheckIcon />
      </Fab>
      <Card raised={true}>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <TextField
                placeholder="Task"
                value={node.task}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                onChange={({ target: { value } }) => {
                  update({ ...node, task: value });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                aria-label="maximum height"
                placeholder="Description"
                multiline
                rows={8}
                margin="normal"
                variant="outlined"
                value={node.description}
                fullWidth={true}
                onChange={({ target: { value } }) => {
                  update({ ...node, description: value });
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Node;
