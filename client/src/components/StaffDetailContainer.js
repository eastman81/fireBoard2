// this file might not be necessary

import React from "react";
import { Typography } from "@material-ui/core";

import Modal from "./Modal";

const StaffDetail = (props) => {
  return (
    <div>
      <Typography>
        {`${props.name} is ${
          props.working === true ? "active" : "not active"
        } at ${props.station}`}
      </Typography>
      <Modal />
    </div>
  );
};

export default StaffDetail;
