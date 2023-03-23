import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface IProps {
  bgColor?: string;
}

const Header: React.FC<IProps> = ({
  bgColor = "transparent"
}) => {
  const navigate = useNavigate();
  return (
    <StyledHeader bgColor={bgColor}>
      <div className="btn-back" onClick={() => navigate(-1)}>Back</div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div<{ bgColor: string; }>`
  position :fixed;
  display: flex;
  align-items: center;
  z-index : 10;
  top : 0px;
  width : 800px;
  height : 50px;
  background-color: ${props => props.bgColor};
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