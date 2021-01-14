import { Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  container: {
    height: "87vh",
    backgroundColor: "rgb(207,216,220)",
  },
  from: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 350,
    margin: "0 auto",
  },
  input: {
    marginTop: "1.5rem",
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    border: "none",
    outline: "none",
  },
  submit: {
    backgroundColor: "rgb(236,89,144)",
    marginTop: "1.5rem",
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    borderRadius: 999,
    padding: 10,
    marginBottom: 10,
    border: "none",
    outline: "none",
    fontSize: 14,
  },
  error: {
    color: "red",
  },
  typography: {
    marginBottom: "1rem",
    textAlign: "center",
  },
});

function Home() {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    if (password !== confirmPassword) {
      register("");
      alert("Password don't match");
    } else {
      setData([{ data }]);
      setPassword("");
      setConfirmPassword("");
      reset();
      console.log(data);
    }
  };

  return (
    <Container className={classes.container} maxWidth="1280">
      <Typography className={classes.typography}>
        <h1 style={{ paddingTop: "1.5rem" }}>Test form validation</h1>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.from}>
        {/* first name */}
        <input
          className={classes.input}
          name="firstName"
          ref={register({
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="First Name"
        />
        {errors.firstName && errors.firstName.type === "required" && (
          <p className={classes.error}>This is required</p>
        )}
        {errors.firstName && errors.firstName.type === "minLength" && (
          <p className={classes.error}>
            First Name is required at least 2 characters
          </p>
        )}
        {errors.firstName && errors.firstName.type === "pattern" && (
          <p className={classes.error}>Please fill without any symbol</p>
        )}

        {/* Last name */}
        <input
          className={classes.input}
          type="lastName"
          name="lastName"
          ref={register({
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Last Name"
        />
        {errors.lastName && errors.lastName.type === "required" && (
          <p className={classes.error}>This is required</p>
        )}
        {errors.lastName && errors.lastName.type === "minLength" && (
          <p className={classes.error}>
            Last Name is required at least 2 characters
          </p>
        )}
        {errors.lastName && errors.lastName.type === "pattern" && (
          <p className={classes.error}>Please fill without any symbol</p>
        )}

        {/* Email */}
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="E-mail"
          ref={register({ required: true })}
        />
        {errors.email && <p className={classes.error}>Email is required</p>}

        {/* Password */}
        <input
          className={classes.input}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          ref={register({ required: true })}
          value={password}
          placeholder="Password"
        />
        {errors.password && <p className={classes.error}>Email is required</p>}

        <input
          className={classes.input}
          type="password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={register({ required: true })}
          value={confirmPassword}
          placeholder="Confirm Password"
        />
        {password !== confirmPassword && (
          <p className={classes.error}>Password Do not match</p>
        )}
        {errors.confirmPassword && (
          <p className={classes.error}>Confirm password is required</p>
        )}

        {/* Gender */}
        <select
          name="gender"
          className={classes.input}
          ref={register({ required: true })}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p className={classes.error}>Gender is required</p>}

        <input type="submit" className={classes.submit} />
      </form>

      <Container>
        {data.map((x) => (
          <figure>
            <h3>Result:</h3>
            <p>
              <strong>First Name: </strong>
              {x.data.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {x.data.lastName}
            </p>
            <p>
              <strong>Email: </strong>
              {x.data.email}
            </p>
            <p>
              <strong>Gender: </strong>
              {x.data.gender}
            </p>
          </figure>
        ))}
      </Container>
    </Container>
  );
}

export default Home;
