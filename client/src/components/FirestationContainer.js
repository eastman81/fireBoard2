import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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

export default function FirestationContainer(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContainer}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}
