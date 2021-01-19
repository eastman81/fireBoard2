import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import WorkingSelect from "../components/StaffWorkingSelect";
import API from "../utils/API";

export default function FormDialog(props) {
  const { id, name, station, working } = props;

  const [open, setOpen] = useState(false);
  const [isWorking, setIsWorking] = useState(working);

  const handleClick = () => setOpen(!open);

  // TODO:
  // 1. need to add a delete button

  // 2. adding context to this page would be nice, because updating working 2 layers up seems hard
  // if we managed a version of working state here, it should be able to change the UI when update easier

  // 3. do I need/want this API call here, or keep it on Firefighters.js and update it when it sees the dialog change?

  const updateFirefighter = () => {
    API.updateFirefighter(id, { working: !isWorking })
      .then((res) => setIsWorking(!isWorking))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        {`${name} is ${
          isWorking === true ? "active" : "not active"
        } at ${station}`}
      </Button>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Edit {name}'s Working Status
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`${name} is currently ${
              isWorking === true ? "active" : "not active"
            }`}
          </DialogContentText>
          <WorkingSelect value={isWorking} onChange={updateFirefighter} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
