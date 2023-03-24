import React from "react";
import styled from "styled-components";
import { PasswordContainer } from "src/Container/SignUpPage/PasswordContainer";

const SignUpPage: React.FC = () => {

  return (
    <StyledView>
      <div className="steper-wrapper">

      </div>
      <PasswordContainer />
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 100vw;
  height : 100vh;
`;

export { SignUpPage }