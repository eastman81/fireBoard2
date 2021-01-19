import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle, Whatshot } from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkButton: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
  },
  lastButton: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function NavTitle() {
    return (
      <React.Fragment>
        <Whatshot color="inherit" fontSize="large" />
        <Typography
          component={Link}
          to={"/"}
          variant="h5"
          color="inherit"
          className={classes.linkButton}
        >
          FireBoard
        </Typography>

        {/* placeholder to stop full nav link bug */}
        <Typography className={classes.lastButton} />
      </React.Fragment>
    );
  }

  function NavAuthTitle() {
    return (
      <React.Fragment>
        <Typography
          component={Link}
          to={"/"}
          variant="h6"
          color="inherit"
          className={classes.linkButton}
        >
          Home
        </Typography>
        <Typography
          component={Link}
          to={"/firefighters"}
          variant="h6"
          color="inherit"
          className={classes.linkButton}
        >
          Firefighters
        </Typography>
        <Typography
          component={Link}
          to={"/scheduler"}
          variant="h6"
          color="inherit"
          className={classes.linkButton}
        >
          Fire Stations
        </Typography>

        {/* placeholder to stop full nav link bug */}
        <Typography className={classes.lastButton} />
      </React.Fragment>
    );
  }

  // function NavProfile() {
  //   return (
  //     <React.Fragment>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="menu-appbar"
  //         aria-haspopup="true"
  //         color="inherit"
  //         onClick={handleMenu}
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <Menu
  //         id="menu-appbar"
  //         anchorEl={anchorEl}
  //         anchorOrigin={{
  //           vertical: "top",
  //           horizontal: "right",
  //         }}
  //         keepMounted
  //         transformOrigin={{
  //           vertical: "top",
  //           horizontal: "right",
  //         }}
  //         open={open}
  //         onClose={handleClose}
  //       >
  //         <MenuItem onClick={handleClose}>Profile</MenuItem>
  //         {/* one of these needs to be log in / log out depending on user status */}
  //         <MenuItem onClick={handleClose}>My account</MenuItem>
  //       </Menu>
  //     </React.Fragment>
  //   );
  // }

  // function NavLogin() {
  //   return (
  //     <React.Fragment>
  //       <Button
  //         // not sure if all aria stuff is needed for this button type
  //         aria-label="account of current user"
  //         aria-controls="menu-appbar"
  //         aria-haspopup="true"
  //         color="inherit"
  //         onClick={handleMenu}
  //       >
  //         Login
  //       </Button>
  //       <Menu
  //         id="menu-appbar"
  //         anchorEl={anchorEl}
  //         anchorOrigin={{
  //           vertical: "top",
  //           horizontal: "right",
  //         }}
  //         keepMounted
  //         transformOrigin={{
  //           vertical: "top",
  //           horizontal: "right",
  //         }}
  //         open={open}
  //         onClose={handleClose}
  //       >
  //         {/* Dialog here to log in */}
  //       </Menu>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
        />
      </FormGroup> */}

      <AppBar position="static">
        {auth ? (
          <Toolbar>
            <NavAuthTitle />

            {/* <NavProfile /> */}

            {/* when I move the below into NavProfile, that is when the bug that moves the popup left comes in */}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
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
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              {/* one of these needs to be log in / log out depending on user status */}
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>

            
          </Toolbar>
        ) : (
          <Toolbar>
            <NavTitle />

            {/* <NavLogin /> */}
            <Button
              // not sure if all aria stuff is needed for this button type
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              Login
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
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
              onClose={handleClose}
            >
              {/* Dialog here to log in */}
            </Menu>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
