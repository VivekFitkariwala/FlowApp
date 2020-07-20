import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "20px 20px",
  },
  title: {
    textAlign: "center",
  },

  delete: {
    position: "absolute",
    right: "0px",
    transform: "translate(50%,-50%)",
  },

  deleteHide: {
    display: "none",
  },
}));

export default useStyles;
