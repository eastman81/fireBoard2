import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";

import StaffCreationContainer from "../components/StaffCreationContainer";
import StaffAddedContainer from "../components/StaffAddedContainer";
import FirefightersContext from "../utils/FirefightersContext";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
}));

const Firefighters = () => {
  const classes = useStyles();

  const [firefighters, setFirefighters] = useState([]);
  const [firefighter, setFirefighter] = useState({
    name: "",
    station: "",
    working: "",
  });

  useEffect(() => {
    loadFirefighters();
  }, []);

  const loadFirefighters = () => {
    API.getFirefighters()
      .then((res) => setFirefighters(res.data))
      .catch((err) => console.log(err));
  };

  const clearState = () => {
    const emptyFirefighter = {
      name: "",
      station: "",
      working: "",
    };
    setFirefighter(emptyFirefighter);
  };

  // handle normal text change
  const handleChange = (event) => {
    const editedKey = event.target.id;
    const editedValue = event.target.value;
    const newFirefighter = { ...firefighter, [editedKey]: editedValue };
    setFirefighter(newFirefighter);
  };

  // handle a selector change
  const handleSelectChange = (event) => {
    const newFirefighter = { ...firefighter, working: event.target.value };
    setFirefighter(newFirefighter);
  };

  // do I need to write the handle submit here, or where the button is created?
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // would be nice to add validation to check that all three areas are filled out
    // maybe that would come with some card validation, or just a quick check at the state of firefighter
    API.saveFirefighter({
      name: firefighter.name,
      station: firefighter.station,
      working: firefighter.working,
    })
      .then((res) => {
        loadFirefighters();
        clearState();
      })
      .catch((error) => console.log(error));
  };

  return (
    <FirefightersContext.Provider
      value={{ firefighter, firefighters, handleChange }}
    >
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            {/* should I move the handle effects into the componient they are used?*/}
            {/* I think if I did this, I would need a useEffect in each to see the change in the context and update... */}
            <StaffCreationContainer
              handleSelectChange={handleSelectChange}
              clear={clearState}
              onSubmit={handleFormSubmit}
            />
          </Grid>
          <Grid item xs>
            <StaffAddedContainer />
          </Grid>
        </Grid>
      </div>
    </FirefightersContext.Provider>
  );
};

export default Firefighters;
