import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

import FirefightersContext from "../utils/FirefightersContext";
import WorkingSelect from "./StaffWorkingSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  cardContainer: {
    padding: "5px",
    margin: "5px",
    // figure out if I would need to set a height for this and staffAddedContainer
    textAlign: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75%",
    },
  },
  button: {
    width: "25%",
  },
  buttonGroup: {
    width: "100%",
    display: "flow-root",
    textAlign: "center",
  },
}));

export default function StaffCreationCard(props) {
  const { firefighter, handleChange } = useContext(FirefightersContext);
  const classes = useStyles();
  const clear = props.clear;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContainer}>
        <Typography gutterBottom variant="h5" component="h2">
          Add A Firefighter
        </Typography>

        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Full Name"
            type="text"
            value={firefighter.name}
            onChange={handleChange}
          />
          <TextField
            id="station"
            label="Station Number"
            type="text"
            value={firefighter.station}
            onChange={handleChange}
          />
          <WorkingSelect
            value={firefighter.working}
            onChange={props.handleSelectChange}
          />
        </form>
      </CardContent>
      <CardActions className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={clear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={(firefighter.name && firefighter.station) === ""}
          className={classes.button}
          onClick={props.onSubmit}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
