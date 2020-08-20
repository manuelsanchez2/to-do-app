import React from "react";
import styled from "@emotion/styled";

const MainAddTask = styled.main`
  background-color: ghostwhite;
  border-style: solid;
  border-image-slice: 1;
  border-width: 5px 0;
  border-image-source: var(--highlight-Color);
  overflow: auto;
`;
function StyledMainAddTask({ children }) {
  return <MainAddTask>{children}</MainAddTask>;
}

export default StyledMainAddTask;
