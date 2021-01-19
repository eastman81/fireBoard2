// this file needs to be considered as necssary or not
// if needed, needs to dynamically be used as the button everywhere, defined by the props passed in

import React from "react";

/* import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  deleteButton: {
    float: "right",
    color: "#e74944",
  },
});
*/

const styles = {
  deleteButton: {
    float: "right",
    color: "#e74944",
  },
};

// whats the point of this file if I am just passing down props
const ActionButton = (props) => {
    <span /*classname={}*/ {...props}></span>
};

export default ActionButton;
