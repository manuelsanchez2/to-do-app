import React from "react";
import plusSrc from "../assets/plus.svg";
import styled from "@emotion/styled";

const ButtonImage = styled.button`
  background: none;
  border: none;
`;

function ButtonPlus() {
  return (
    <ButtonImage>
      <img src={plusSrc} alt="button that creates tasks" />
    </ButtonImage>
  );
}

export default ButtonPlus;
