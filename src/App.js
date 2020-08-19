import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import ListItemText from "./components/ListItemText";
import ListItemCheckbox from "./components/ListItemCheckbox";
import { getTodos, createTask } from "./api/todos";
import ButtonPlus from "./components/ButtonPlus";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todos = await getTodos();
      setTodos(todos);
      console.log(todos);
    };
    doFetch();
  }, []);

  // const Handleclick = () => {
  //   console.log("hola");
  //   console.alert("hola");
  //   // createTask();
  // };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/main">
            <header className="app__header">
              <h2>TO DO LIST</h2>
            </header>
            <main className="app__main">
              <List>
                {todos?.map((todo) => (
                  <ListItem key={todo.id}>
                    <ListItemIcon />
                    <ListItemText title={todo.title} date={todo.date} />
                    <ListItemCheckbox />
                  </ListItem>
                ))}
              </List>
            </main>
          </Route>
          <Route path="/settings">
            <h2>Hola, soy Settings</h2>
          </Route>
        </Switch>
        <footer className="app__footer">
          <Link to="/main">Home</Link>
          <ButtonPlus />
          <Link to="/settings">Settings</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
