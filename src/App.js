import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*" >
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}
export default App;
/*<Route path="/inventory">
            <Inventory />
          </Route>*/