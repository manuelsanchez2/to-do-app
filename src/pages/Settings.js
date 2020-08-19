import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";
import { useHistory } from "react-router-dom";

function Settings(props) {
  const history = useHistory();

  return (
    <>
      <header className="app__header">
        <h2>SETTINGS</h2>
      </header>
      <main className="app__main">
        <button onClick={() => history.goBack()}>
          BACK TO CREATE NEW TASK
        </button>
        <ul>
          <li>OPCION 1</li>
          <li>OPCION 2</li>
          <li>OPCION 3</li>
          <li>OPCION 4</li>
          <li>OPCION 5</li>
        </ul>
        <Link to="/add">ADD NEW TASK</Link>
      </main>
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
    </>
  );
}

export default Settings;
