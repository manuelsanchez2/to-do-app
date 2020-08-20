import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ButtonPlus from "./ButtonPlus";
import listSrc from "../assets/list.svg";
import settingsSrc from "../assets/settings.svg";

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

function StyledFooter(props) {
  return (
    <Footer>
      <Link to="/home">
        <img src={listSrc} alt="home" />
      </Link>
      <Link to="/add">
        <ButtonPlus />
      </Link>
      <Link to="/settings">
        <img src={settingsSrc} alt="settings" />{" "}
      </Link>
    </Footer>
  );
}

export default StyledFooter;
