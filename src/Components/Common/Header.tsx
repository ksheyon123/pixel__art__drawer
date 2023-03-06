import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div className="btn-back" onClick={() => navigate(-1)}>Back</div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position :fixed;
  display: flex;
  align-items: center;
  z-index : 10;
  top : 0px;
  width : 800px;
  height : 50px;
  background-color: transparent;
  -webkit-app-region: drag;
  & > div {
    -webkit-app-region : no-drag;
  }
  & > div.btn-back {
    padding : 5px 10px;
    cursor: pointer;
  }
`;

export { Header }