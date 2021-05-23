import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from "./components/Welcome";
import Music from "./components/Music";

function App() {
  return (
    <Router>
      <div className="page">

        <Switch>
          <Route path="/about">

          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
