import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./pages/Home";
import Firefighters from "./pages/Firefighters";
import Scheduler from "./pages/Scheduler";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Nav";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#e53935",
    },
  },
});

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <MuiThemeProvider theme={theme}>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/firefighters">
              <Firefighters />
            </Route>
            <Route exact path="/scheduler">
              <Scheduler />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </MuiThemeProvider>
      </div>
    </Router>
  );
}

export default App;
