import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  title: {
    textAlign: "center",
  },
  check: {
    position: "absolute",
    right: "0px",
    transform: "translate(50%,-50%)",
  },
}));

export default useStyles;
