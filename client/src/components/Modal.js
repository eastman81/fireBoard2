// might not use this in favor of a dialog

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 25;
  const left = 25;

  return {
    top: `${top}%`,
    margin: "auto",
  };
}
const useStyles = makeStyles((theme) => ({
  // paper: {
  //   position: "absolute",
  //   top: 50,
  //   width: "400px",
  //   backgroundColor: "white",
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={getModalStyle()} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{alignItems:'center',justifyContent:'center'}}
      >
        {body}
      </Modal>
    </div>
  );
}
