import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "src/Constants/index";

const ElementSelectPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <div>
        <div>
          Select Pixel
        </div>
        <div>

        </div>
      </div>
      <div onClick={() => navigate(PATH.PALETTE)}>
        Next
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  
  width : 100%;
  height : 100%;
  padding-top : 50px;
`;

export { ElementSelectPage }