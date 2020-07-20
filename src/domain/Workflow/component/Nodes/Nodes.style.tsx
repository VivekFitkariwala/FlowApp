import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "20px 20px",
  },
  title: {
    textAlign: "center",
  },
  check: {
    position: "absolute",
    right: "0px",
    transform: "translate(50%,-50%)",
  },
  checkHide: {
    display: "none",
  },
}));

export default useStyles;
