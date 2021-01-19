import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

import Dialog from "./Dialog";
import Scroller from "../components/ScrollBox";
import FirefightersContext from "../utils/FirefightersContext";
import { sortStaff } from "../utils/HelperFunctions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  cardContainer: {
    padding: "5px",
    margin: "5px",
    textAlign: "center",
  },
});

export default function StaffAddedContainer() {
  const { firefighters } = useContext(FirefightersContext);
  const classes = useStyles();

  const sortedStaff = sortStaff(firefighters);

  return (
    <Card id="top-anchor" className={classes.root}>
      <CardContent className={classes.cardContainer}>
        <Typography gutterBottom variant="h5" component="h2">
          All Firefighters
        </Typography>
        <Scroller>
          {sortedStaff.map((firefighter) => (
            <Dialog
              id={firefighter._id}
              key={firefighter.name}
              firefighter={firefighter}
              name={firefighter.name}
              station={firefighter.station}
              working={firefighter.working}
            />
          ))}
        </Scroller>
      </CardContent>
    </Card>
  );
}
