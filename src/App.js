import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
          <Route path="/">
            <Redirect to="home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
