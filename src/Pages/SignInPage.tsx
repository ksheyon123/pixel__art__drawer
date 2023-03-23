import React from "react";
import styled from "styled-components";

const SignInPage: React.FC = () => {

  return (
    <StyledView>
      <div className="steper-wrapper">

      </div>
      <div className="view-title">
        비밀번호 생성
      </div>
      <div className="view-description">
        이 비밀번호는 현재 PC에서만 사용이 가능합니다.
        입력된 비밀번호는 찾거나 복구할 수 없습니다.
      </div>
      <div className="input-wrapper">
        <div className="title">비밀번호</div>
        <div className="input-area"></div>
      </div>
      <div className="input-wrapper">
        <div className="title">비밀번호 확인</div>
        <div className="input-area"></div>
      </div>
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 100vw;
  height : 100vh;
`;

export { SignInPage }