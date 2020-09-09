import React from "react";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import { Header } from "./components/Header";
//Pages
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
// Css
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
