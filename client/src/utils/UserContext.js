import React from "react";

const UserContext = React.createContext({
  name: "",
  email: "",
  // password: "",
});

export default UserContext;
