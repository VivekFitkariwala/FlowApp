import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  title: {
    textAlign: "center",
  },
  container: {
    minWidth: "500px",
  },
  footer: {
    textAlign: "center",
    margin: "30px",
  },
}));

export default useStyles;
