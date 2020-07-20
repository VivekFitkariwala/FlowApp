import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./Workflow.style";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { WORKFLOW_MODEL, WORKFLOW_STATUS } from "../../../../types/index";

interface IProps {
  state: WORKFLOW_MODEL;
  deleteFn: (id: string) => void;
  updateState: (id: string) => void;
}

function Workflow({ state, deleteFn, updateState }: IProps) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const classToApply = hover
    ? classNames(classes.delete)
    : classNames(classes.delete, classes.deleteHide);

  const showDelete = () => {
    setHover(true);
  };

  const hideDelete = () => {
    setHover(false);
  };

  const statusColor =
    state.state === WORKFLOW_STATUS.COMPLETED ? "primary" : "default";
  return (
    <Link
      to={`/workflow/${state.id}`}
      onMouseEnter={showDelete}
      onMouseLeave={hideDelete}
    >
      <div className={classes.root}>
        <Fab
          style={{ color: "red" }}
          aria-label="Delete"
          className={classToApply}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            deleteFn(state.id);
          }}
        >
          <DeleteIcon />
        </Fab>
        <Card raised={true}>
          <CardHeader title={state.name} className={classes.title}></CardHeader>
          <CardContent>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body1" display="inline">
                  {state.state}
                </Typography>
              </Grid>
              <Grid item>
                <Fab
                  color={statusColor}
                  aria-label="Check"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    updateState(state.id);
                  }}
                >
                  <CheckIcon />
                </Fab>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}

export default Workflow;
