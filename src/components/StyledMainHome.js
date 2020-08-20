import React from "react";
import styled from "@emotion/styled";

const MainHome = styled.main`
  background-color: ghostwhite;
  border-style: solid;
  border-image-slice: 1;
  border-width: 5px 0;
  border-image-source: var(--highlight-Color);
  overflow: auto;
`;
function StyledMainHome({ children }) {
  return <MainHome>{children}</MainHome>;
}

export default StyledMainHome;
