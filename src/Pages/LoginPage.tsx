import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "src/Constants/index";
import { theme } from "src/Styles/theme";

const LoginPage: React.FC = () => {
  return (
    <StyledView>
      <div className="login-modal">
        <div>Login</div>
        <div className="input-wrapper">
          <div>USER</div>
        </div>
        <div className="input-wrapper">
          <div>PASSWORD</div>
        </div>
        <div className="btn-wrapper"></div>
      </div>
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 100vw;
  height : 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.login-modal {
    width : 400px;
    height : 650px;
    border : 1px solid ${theme.mono4};
    padding : 20px;
    & > div.input-wrapper {
      display: grid;

    }
  }
`;

export { LoginPage }