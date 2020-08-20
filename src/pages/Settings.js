import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";
import { useHistory } from "react-router-dom";
import backSrc from "../assets/back.svg";
import StyledHeader from "../components/StyledHeader";
// import styled from "@emotion/styled";

function Settings(props) {
  const history = useHistory();

  return (
    <>
      <StyledHeader>
        <h2>SETTINGS</h2>
      </StyledHeader>
      <main className="app__main">
        <button className="app__back_button" onClick={() => history.goBack()}>
          <img src={backSrc} alt="back" />
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
