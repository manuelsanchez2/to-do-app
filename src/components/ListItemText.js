import React from "react";
import "./ListItemText.css";
import styled from "@emotion/styled";

const Title = styled.h3`
  color: var(--highlight-Color);
  font-weight: bolder;
`;

const SubTitle = styled.span`
  color: var(--highlight-Color);
  font-weight: bolder;
  font-style: italic;
`;

const SubSubTitle = styled.span`
  display: block;
`;

function ListItemText({ title, author, date }) {
  return (
    <div>
      <Title>{title}</Title>
      <SubTitle>{author}</SubTitle>
      <SubSubTitle>{date}</SubSubTitle>
    </div>
  );
}

export default ListItemText;
