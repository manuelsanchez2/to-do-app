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
import Settings from "./pages/Settings";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/add">
            <AddTask />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Redirect to="home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
