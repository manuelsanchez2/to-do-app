import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  background-color: var(--highlight-Color);
  color: white;
  display: flex;
  align-content: center;
  justify-content: center;
`;

function StyledHeader({ children }) {
  return <Header>{children}</Header>;
}

export default StyledHeader;
