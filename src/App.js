import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Dev from "./components/Dev";
import Jpn from "./components/Jpn";
import Music from "./components/Music";

function App() {
  return (
    <Router>
      <div className="page">
        <Header />

        <Switch>
          <Route path="/dev">
            <Dev />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jpn">
            <Jpn />
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
