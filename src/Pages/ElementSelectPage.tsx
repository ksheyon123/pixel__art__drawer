import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "src/Constants/index";

const ElementSelectPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <div>
        Head
      </div>
      <div>
        Eyes
      </div>
      <div>
        Eyes Action
      </div>
      <div>
        Body
      </div>
      <div>
        Hand
      </div>
      <div>
        Hand Action
      </div>
      <div>
        Foot
      </div>
      <div>
        Foot Action
      </div>
      <div onClick={() => navigate(PATH.PALETTE)}>
        Next
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */
  padding-top : 50px;
`;

export { ElementSelectPage }