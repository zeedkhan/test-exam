import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Function1 from "./components/Function1";
import Function2 from "./components/Function2";
import Function3 from "./components/Function3";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    padding: "1rem",
    textAlign: "center",
    fontSize: "2rem",
    backgroundColor: "rgb(236,239,241)",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="1280" style={{ padding: 0 }}>
      <Typography varint="h7" className={classes.header}>
        Test Exam
      </Typography>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/pokemon" component={Pokemon}></Route>
      <Route path="/function1" component={Function1}></Route>
      <Route path="/function2" component={Function2}></Route>
      <Route path="/function3" component={Function3}></Route>
    </Container>
  );
}

export default App;
