import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "900px",
  },
  button: {
    color: "black",
    padding: "1rem",
    fontSize: 20,
  },
  Toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

function Nav() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">
            <Button className={classes.button}>Home</Button>
          </Link>
          <Link to="/pokemon">
            <Button className={classes.button}>Pokemon</Button>
          </Link>
          <Link to="/function1">
            <Button className={classes.button}>Function 1</Button>
          </Link>
          <Link to="/function2">
            <Button className={classes.button}>Function 2</Button>
          </Link>
          <Link to="/function3">
            <Button className={classes.button}>Function 3</Button>
          </Link>
        </Typography>
      </Toolbar>
    </Container>
  );
}

export default Nav;
