import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 20px",
    margin: "0px",
  },
  filter: {
    minWidth: "120px",
  },
  createButton: {
    marginLeft: "auto",
  },
}));

export const useButtonStyle = makeStyles((theme) => ({
  root: {
    display: "inline",
    margin: "0px 10px",
  },
}));
