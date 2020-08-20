import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import backSrc from "../assets/back.svg";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import PageContainer from "../components/PageContainer";
// import styled from "@emotion/styled";

function Settings(props) {
  const history = useHistory();

  return (
    <PageContainer>
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
      <StyledFooter />
    </PageContainer>
  );
}

export default Settings;
