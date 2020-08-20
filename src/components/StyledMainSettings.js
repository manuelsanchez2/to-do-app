import React from "react";
import styled from "@emotion/styled";

const MainSettings = styled.main`
  background-color: ghostwhite;
  border-style: solid;
  border-image-slice: 1;
  border-width: 5px 0;
  border-image-source: var(--highlight-Color);
  overflow: auto;
`;
function StyledMainSettings({ children }) {
  return <MainSettings>{children}</MainSettings>;
}

export default StyledMainSettings;
