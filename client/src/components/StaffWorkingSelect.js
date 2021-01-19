import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

export default function WorkingSelect(props) {
  return (
    <TextField
      id="working"
      select
      label="Available for Scheduling"
      value={props.value}
      onChange={props.onChange}
      style={{ textAlign: "left", width: "75%" }}
    >
      <MenuItem key="Yes" id="Yes" value={true}>
        Yes
      </MenuItem>
      <MenuItem key="No" id="No" value={false}>
        No
      </MenuItem>
    </TextField>
  );
}

// context select

// import React, { useContext } from "react";
// import { MenuItem, TextField } from "@material-ui/core";

// import FirefightersContext from "../utils/FirefightersContext";

// export default function WorkingSelect() {
//   const { firefighter, handleSelectChange } = useContext(FirefightersContext);

//   return (
//     <TextField
//       id="working"
//       select
//       label="Schedule at Station"
//       value={firefighter.working}
//       onChange={handleSelectChange}
//       style={{ textAlign: "left", width: "75%" }}
//     >
//       <MenuItem key="Yes" id="Yes" value={true}>
//         Yes
//       </MenuItem>
//       <MenuItem key="No" id="No" value={false}>
//         No
//       </MenuItem>
//     </TextField>
//   );
// }
