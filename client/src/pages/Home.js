import React from "react";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import engineSketch from "../assets/images/engineSketch.png";
import engineSketch from "../assets/images/engineColor.png";
// import engineSketch from "../assets/images/engineGrey.png";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  img: {
    width: "100%",
    paddingTop: theme.spacing(1),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    // flexGrow: 1,
  },
  textField: {
    marginRight: theme.spacing(1),
    width: "188.6px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  longTextField: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  button: {
    width: "188.6px",
    height: "56px",
  },
}));

function Home() {
  const classes = useStyles();

  function ImgRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <img
            className={classes.img}
            src={engineSketch}
            alt="Fire Engine Sketches"
          />
        </Grid>
      </React.Fragment>
    );
  }

  function TextRow() {
    return (
      <React.Fragment>
        <Grid item xs={10}>
          {/* update font to match title font */}
          <h2>The easy way to put out your scheduling fires</h2>
          <h3>
            Instead of whiteboard headaches, schedule your staff from wherever
            you are, whenever you need to.
          </h3>
        </Grid>
      </React.Fragment>
    );
  }

  // build log in functionality after auth is in place
  // do I need a 3rd mongo db to save the users, or something more secure?
  function SignUpRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            id="outlined-full-name"
            label="Name"
            fullWidth
            variant="outlined"
            className={classes.longTextField}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-margin-email"
            label="Email"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            id="outlined-margin-password"
            label="Password"
            variant="outlined"
            className={classes.textField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign up for free
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <form>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <ImgRow />

          <Grid container alignItems="center" justify="center" item xs={6}>
            <TextRow />
          </Grid>

          <Grid container alignItems="center" justify="center" item xs={6}>
            <Grid container spacing={1} item xs={10}>
              <SignUpRow />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}

export default Home;
