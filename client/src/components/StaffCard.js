import React, { useState, useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import StationsContext from "../utils/StationsContext";

export default function StaffCard(props) {
  const { stations } = useContext(StationsContext);

  // const AvatarButton = () => {
  //   return (
  //     <React.Fragment>
  //       <Avatar>
  //         <ArrowDropDownIcon fontSize="large" />
  //       </Avatar>
  //     </React.Fragment>
  //   );
  // };

  // dropdown setup
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleMenu = (event) => {
    let target = anchor === null ? event.currentTarget : null;
    setAnchor(target);
  };

  const handleChange = (event) => {
    const { myValue } = event.currentTarget.dataset;
    props.updateFirefighter(props.id, myValue);

    handleMenu(event);
  };

  return (
    <div>
      <ListItem>
        <ListItemText primary={props.name} secondary={props.station} />
        <ListItemAvatar>
          <Button onClick={handleMenu}>
            <Avatar>
              <ArrowDropDownIcon fontSize="large" />
              {/* can make the below into its own comp if need be, used here and Nav */}
              <Menu
                id="buttonDrop"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleMenu}
              >
                {stations.map((station) => (
                  <MenuItem
                    key={station.name}
                    data-my-value={station.name}
                    onClick={handleChange}
                  >
                    {station.name}
                  </MenuItem>
                ))}
              </Menu>
            </Avatar>
          </Button>
        </ListItemAvatar>
      </ListItem>
      <Divider component="li" />
    </div>
  );
}
