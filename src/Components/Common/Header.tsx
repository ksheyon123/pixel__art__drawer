import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {

  return (
    <StyledHeader>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position :fixed;
  z-index : 10;
  top : 0px;
  width : 800px;
  height : 50px;
  background-color: transparent;
  -webkit-app-region: drag;
`;

export { Header }