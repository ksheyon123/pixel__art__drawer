import React, { useState } from "react";
import styled from "styled-components";
import { PasswordContainer, MnemonicContainer } from "src/Container/SignUpPage/";

const SignUpPage: React.FC = () => {
  const [stepIdx, setStepIdx] = useState<number>(0);

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
  padding-top : 40px;
`;

export { SignUpPage }