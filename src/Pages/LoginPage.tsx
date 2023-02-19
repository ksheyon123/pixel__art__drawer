import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/Constants/index";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledView onClick={() => {
      console.log("Goto")
      navigate(PATH.PALETTE);
    }}>
      Login Page
    </StyledView>
  )
}

const StyledView = styled.div`

`;

export { LoginPage }