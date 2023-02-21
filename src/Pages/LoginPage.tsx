import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "src/Constants/index";
import { LoginPageContainer } from "src/Container/index";
import { Input, Button } from "src/Components/index"
import { theme } from "src/Styles/theme";

const LoginPage: React.FC = () => {

  const {
    getLogin,
    setUserId,
    setPassword,
    userId,
    password
  } = LoginPageContainer();

  return (
    <StyledView>
      <div className="login-modal">
        <div className="modal-title">LOGIN</div>
        <div className="input-wrapper">
          <div className="input-title">USER</div>
          <Input />
        </div>
        <div className="input-wrapper">
          <div className="input-title">PASSWORD</div>
          <Input />
        </div>
        <div className="btn-wrapper">
          <Button name="Login" onClick={getLogin} disabled={false} />
        </div>
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
    color : ${theme.mono1};
    position: relative;
    width : 400px;
    height : 500px;
    border : 1px solid ${theme.mono3};
    padding : 20px 0px;
    border-radius : 6px;
    background-color: ${theme.mono6};
    & > div.modal-title {
      ${theme.b2m};
      margin : 0px 20px;
    }
    & > div.input-wrapper {
      display: grid;
      vertical-align: middle;
      grid-template-columns: 100px 1fr;
      padding-bottom : 2px;
      border-bottom : 2px solid ${theme.mono1};
      margin : 0px 20px;
      margin-bottom : 20px;

      & > div.input-title {
        display: flex;
        align-items: center;
      }
      &:last-of-type {
        margin-bottom : 0px;
      }
    }
    & > div.btn-wrapper {
      color : ${theme.mono1};
      width : 400px;
      height : 50px;
      position: absolute;
      bottom : 0px;
    }
  }
`;

export { LoginPage }