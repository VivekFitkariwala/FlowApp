import React from "react";
import Header from "../layouts/Header/Header";
import Body from "../layouts/Body/Body";
import useStyles from "./Home.style";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Body />
    </div>
  );
}

export default Home;
