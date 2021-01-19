import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import API from "../utils/API";
import { sortStaff } from "../utils/HelperFunctions";
import StaffCard from "../components/StaffCard";
import FirestationContainer from "../components/FirestationContainer";
import FirestationCard from "../components/FirestationCard";
import FirefightersContext from "../utils/FirefightersContext";
import StationsContext from "../utils/StationsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  gridScroll: {
    overflowY: "scroll",
    height: "735px",
  },
}));

function Scheduler() {
  const classes = useStyles();

  const [firefighters, setFirefighters] = useState([]);
  const [stations, setStations] = useState([]);

  // TODO: put firefighters into stations

  useEffect(() => {
    // do I need to use API call to get firefighters again,
    // or if I save the call from other page to context, will it still be there?
    loadFirefighters();
    loadStations();
  }, []);

  const loadFirefighters = () => {
    API.getFirefighters()
      .then((res) => setFirefighters(res.data))
      .catch((err) => console.log(err));
  };

  const loadStations = () => {
    API.getFirestations()
      .then((res) => setStations(res.data))
      .catch((err) => console.log(err));
  };

  // might not need this
  const handleFirefighterUpdate = () => {
    // should I have the basic setup of forefoghter a layer higher for this type of updating
    // maybe look at how to build an app using context
  };

  const updateFirefighter = (fireFighterId, stationName) => {
    API.updateFirefighter(fireFighterId, {
      station: stationName,
    })
      .then((res) => loadFirefighters())
      .catch((err) => console.log(err));
  };

  return (
    <FirefightersContext.Provider value={{ firefighters }}>
      <StationsContext.Provider value={{ stations }}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3} className={classes.gridScroll}>
              <FirestationContainer title="Avaiable Firefighters">
                {/* add a filter here or above to not show inavctive firefighters */}
                <List>
                  <Divider
                    variant="inset"
                    component="li"
                    style={{ marginRight: "72px" }}
                  />
                  {sortStaff(firefighters).map((firefighter) => (
                    <StaffCard
                      key={firefighter._id}
                      id={firefighter._id}
                      name={firefighter.name}
                      station={firefighter.station}
                      updateFirefighter={updateFirefighter}
                    />
                  ))}
                </List>
              </FirestationContainer>
            </Grid>
            <Grid item xs={9}>
              <FirestationContainer title="Stations">
                {stations.map((station) => (
                  <FirestationCard key={station._id} stationInfo={station} />
                ))}
              </FirestationContainer>
            </Grid>
          </Grid>
        </div>
      </StationsContext.Provider>
    </FirefightersContext.Provider>
  );
}

export default Scheduler;
