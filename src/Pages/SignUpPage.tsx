import React from "react";
import styled from "styled-components";
import { PasswordContainer, MnemonicContainer } from "src/Container/SignUpPage/";

const SignUpPage: React.FC = () => {

  return (
    <StyledView>
      <div className="steper-wrapper">

      </div>
      <MnemonicContainer />
      <PasswordContainer />
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 100vw;
  height : 100vh;
`;

export { SignUpPage }