import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "src/Constants/index";
import { Input } from "src/Components/index"
import { theme } from "src/Styles/theme";

const LoginPage: React.FC = () => {
  return (
    <StyledView>
      <div className="login-modal">
        <div>LOGIN</div>
        <div className="input-wrapper">
          <div className="input-title">USER</div>
          <Input />
        </div>
        <div className="input-wrapper">
          <div className="input-title">PASSWORD</div>
          <Input />
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
    height : 500px;
    border : 1px solid ${theme.mono8};
    padding : 20px;
    border-radius : 6px;
    & > div.input-wrapper {
      display: grid;
      vertical-align: middle;
      grid-template-columns: 100px 1fr;
      padding-bottom : 2px;
      border-bottom : 2px solid ${theme.mono8};
      margin-bottom : 20px;
      & > div.input-title {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export { LoginPage }