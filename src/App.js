import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import ButtonPlus from "./components/ButtonPlus";
import listSrc from "./assets/list.svg";
import settingsSrc from "./assets/settings.svg";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add">
            <AddTask />
          </Route>
          <Route path="/settings">
            <h2>Hola, soy Settings</h2>
          </Route>
        </Switch>
        <footer className="app__footer">
          <Link to="/home">
            <img src={listSrc} alt="home" />
          </Link>
          <Link to="/add">
            <ButtonPlus />
          </Link>
          <Link to="/settings">
            <img src={settingsSrc} alt="settings" />
          </Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
