import React from "react";

const FirefightersContext = React.createContext({
  name: "",
  station: "",
  working: "",
  handleChange: () => {},
});

export default FirefightersContext;
